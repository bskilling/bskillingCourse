import React, { useEffect, useState } from 'react';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import Image from 'next/image';

import { IoChevronDownSharp, IoSchool } from 'react-icons/io5';
import { GrWorkshop } from 'react-icons/gr';
import {
  BsBuilding,
  BsChatSquareDots,
  BsListStars,
  BsPersonGear,
  BsPersonVideo3,
  BsPersonWorkspace,
} from 'react-icons/bs';
import { RiGovernmentFill, RiHome2Line } from 'react-icons/ri';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

import { RxHamburgerMenu } from 'react-icons/rx';
import { IoIosArrowDown, IoIosCall } from 'react-icons/io';
import { usePathname } from 'next/navigation';
import { FiFileText } from 'react-icons/fi';
import { GoPerson } from 'react-icons/go';
import { buttonVariants } from '@/components/ui/button';
import { FaStar } from 'react-icons/fa';
import {
  IoHomeOutline,
  IoSchoolOutline,
  IoBriefcaseOutline,
  IoPersonOutline,
  IoChatbubbleEllipsesOutline,
  IoStarOutline,
  IoCallOutline,
  IoLogOutOutline,
} from 'react-icons/io5';
import { FaUniversity } from 'react-icons/fa';
import { FcAbout } from 'react-icons/fc';
import { usePaymentStore } from '@/lib/zustand/phone.store';

const menus = [
  { name: 'Home', href: '/', icon: <IoHomeOutline size={22} /> },
  {
    name: 'All Courses',
    href: '/individual-training',
    icon: <IoSchoolOutline size={22} />,
  },
  {
    name: 'Skills Training',
    href: '/college-training/skill-assisting-program',
    icon: <FaUniversity size={22} />,
  },
  {
    name: 'Govt. Training',
    href: '/government-training-program',
    icon: <IoSchoolOutline size={22} />,
  },
  {
    name: 'Corporate Training',
    href: '/corporate-training',
    icon: <BsBuilding size={22} />,
  },
  { name: 'About Us', href: '/aboutus', icon: <IoPersonOutline size={22} /> },
  {
    name: 'Blogs',
    href: '/blogs',
    icon: <IoChatbubbleEllipsesOutline size={22} />,
  },
  { name: 'Reviews', href: '/reviews', icon: <IoStarOutline size={22} /> },
  {
    name: 'Career',
    href: 'https://sfjbs.talentrecruit.com/career-page',
    icon: <IoBriefcaseOutline size={22} />,
    external: true,
  },
];

export default function NavbarSection() {
  const [college, setCollege] = useState(false);
  const [close, setClose] = useState(false);
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const pathname = usePathname();

  // Get user from payment store
  const { user, reset } = usePaymentStore();

  useEffect(() => {
    console.log(pathname);
    setOpen2(false);
  }, [pathname]);

  const handleLogout = () => {
    reset(); // Clear user data and other store info
  };

  console.log('user---------', user);

  return (
    <div className="">
      <NavigationMenu className="hidden xl:flex">
        <NavigationMenuList className="space-x-5">
          <NavigationMenuItem>
            <Link href={'/individual-training'} className="text-foreground">
              <div className="text-foreground inline-flex gap-x-2 cursor-pointer items-center text-sm">
                <p>All Courses</p>
              </div>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <div className="text-foreground inline-flex gap-x-2">
              {' '}
              <Link href={'/corporate-training'} className="text-foreground text-sm">
                Corporate Training
              </Link>
            </div>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <div className="text-foreground inline-flex gap-x-2">
              <Link href={'/government-training-program'} className="text-sm">
                Government Program
              </Link>
            </div>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <div className="text-foreground inline-flex gap-x-2">
              <Link href={'/institutions'} className="text-sm">
                Institutions
              </Link>
            </div>
          </NavigationMenuItem>

          <NavigationMenuItem className="">
            <Popover>
              <PopoverTrigger className="flex gap-x-3 items-center text-sm">
                {' '}
                More <IoIosArrowDown />
              </PopoverTrigger>
              <PopoverContent className="font-normal">
                <div className="flex flex-col gap-y-3">
                  <p>Options</p>
                  <Link href={'https://sfjbs.talentrecruit.com/career-page'} target="_blank">
                    {' '}
                    <div className="text-foreground inline-flex gap-x-2 cursor-pointer items-center">
                      <IoSchool size={20} className="mx-2" />
                      <p>Career</p>
                    </div>
                  </Link>
                  <Link href={'/reviews'}>
                    {' '}
                    <div className="text-foreground inline-flex gap-x-2 cursor-pointer items-center">
                      <FaStar className="mx-2" size={20} />
                      <p>Review</p>
                    </div>{' '}
                  </Link>

                  <Link href={'/aboutus'}>
                    <div className="text-foreground inline-flex gap-x-2 cursor-pointer items-center">
                      <FcAbout className="mx-2" size={20} />
                      <p>About Us</p>
                    </div>{' '}
                  </Link>
                </div>
              </PopoverContent>
            </Popover>
          </NavigationMenuItem>

          {user ? (
            <NavigationMenuItem>
              <Popover>
                <PopoverTrigger className="flex items-center gap-x-2">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-blue-500 hover:border-blue-600 transition-all">
                    <Image
                      src={`https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}&background=random&color=fff`}
                      alt={user.name || 'User'}
                      fill
                      className="object-cover"
                    />
                  </div>
                </PopoverTrigger>
                <PopoverContent className="w-56">
                  <div className="space-y-4">
                    <div className="flex flex-col items-center pb-4 border-b">
                      <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-blue-500 mb-2">
                        <Image
                          src={`https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}&background=random&color=fff`}
                          alt={user.name || 'User'}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <h3 className="font-medium">{user.name}</h3>
                      <p className="text-sm text-gray-500 truncate max-w-full">{user.email}</p>
                    </div>

                    <div className="space-y-2">
                      <Link
                        href="/dashboard"
                        className="flex items-center gap-x-2 p-2 rounded-md hover:bg-gray-100 transition w-full"
                      >
                        <IoPersonOutline size={18} />
                        <span>Dashboard</span>
                      </Link>

                      <Link
                        href="/my-courses"
                        className="flex items-center gap-x-2 p-2 rounded-md hover:bg-gray-100 transition w-full"
                      >
                        <IoSchoolOutline size={18} />
                        <span>My Courses</span>
                      </Link>

                      <button
                        onClick={handleLogout}
                        className="flex items-center gap-x-2 p-2 rounded-md hover:bg-gray-100 transition w-full text-left text-red-500"
                      >
                        <IoLogOutOutline size={18} />
                        <span>Sign Out</span>
                      </button>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </NavigationMenuItem>
          ) : (
            <>
              <NavigationMenuItem
                className={cn(buttonVariants({ variant: 'outline' }), 'text-base font-light')}
              >
                <Link href={'https://lms.bskilling.com/login/signup.php?'} className="text-sm">
                  Sign Up a
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem
                className={cn(buttonVariants({ variant: 'outline' }), 'text-base font-light')}
              >
                <Link href={'https://lms.bskilling.com/login/index.php'} className="text-sm">
                  Login
                </Link>
              </NavigationMenuItem>
            </>
          )}
        </NavigationMenuList>
      </NavigationMenu>

      {/* Mobile menu */}
      <div>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger className="xl:hidden p-2">
            <RxHamburgerMenu size={30} />
          </SheetTrigger>
          <SheetContent className="border-none py-5 px-6">
            {user && (
              <div className="flex items-center gap-x-3 mb-6 pb-4 border-b">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-blue-500">
                  <Image
                    src={`https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}&background=random&color=fff`}
                    alt={user.name || 'User'}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-medium">{user.name}</h3>
                  <p className="text-xs text-gray-500 truncate max-w-[180px]">{user.email}</p>
                </div>
              </div>
            )}

            <h2 className="text-2xl font-bold text-center mb-6">
              <span className="text-blue-500">b</span>Skilling
            </h2>
            <nav className="flex flex-col space-y-4">
              {user && (
                <>
                  <Link
                    href="/dashboard"
                    className="flex items-center gap-x-4 p-3 rounded-lg hover:bg-gray-100 transition"
                  >
                    <IoPersonOutline size={22} />
                    <span className="text-lg">Dashboard</span>
                  </Link>
                  <Link
                    href="/my-courses"
                    className="flex items-center gap-x-4 p-3 rounded-lg hover:bg-gray-100 transition"
                  >
                    <IoSchoolOutline size={22} />
                    <span className="text-lg">My Courses</span>
                  </Link>
                  <div className="border-t my-2"></div>
                </>
              )}

              {menus.map(menu => (
                <Link
                  key={menu.name}
                  href={menu.href}
                  target={menu.external ? '_blank' : '_self'}
                  className="flex items-center gap-x-4 p-3 rounded-lg hover:bg-gray-100 transition"
                >
                  {menu.icon}
                  <span className="text-lg">{menu.name}</span>
                </Link>
              ))}

              {user && (
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-x-4 p-3 rounded-lg hover:bg-gray-100 transition text-red-500 mt-4 border-t pt-6"
                >
                  <IoLogOutOutline size={22} />
                  <span className="text-lg">Sign Out</span>
                </button>
              )}
            </nav>

            {!user && (
              <div className="mt-6 border-t pt-4">
                <Link
                  href="https://lms.bskilling.com/login/signup.php"
                  className="block text-center p-3 bg-blue-600 text-white rounded-lg mb-2 hover:bg-blue-700"
                >
                  Sign Up
                </Link>
                <Link
                  href="https://lms.bskilling.com/login/index.php"
                  className="block text-center p-3 border rounded-lg hover:bg-gray-100"
                >
                  Login
                </Link>
              </div>
            )}
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
