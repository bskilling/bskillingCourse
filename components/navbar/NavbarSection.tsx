import React, { useEffect, useMemo, useState } from 'react';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import Link from 'next/link';
import { cn } from '@/lib/utils';

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
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
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
} from 'react-icons/io5';
import { FaUniversity } from 'react-icons/fa';
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

  useEffect(() => {
    console.log(pathname);
    setOpen2(false);
  }, [pathname]);
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
              <Link
                href={'/corporate-training'}
                className="text-foreground text-sm"
              >
                Corporate Training
              </Link>
            </div>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <div className="text-foreground inline-flex gap-x-2">
              {/* <RiGovernmentFill size={20} className="mx-2" /> */}
              <Link href={'/government-training-program'} className="text-sm">
                Government Program
              </Link>
            </div>
          </NavigationMenuItem>
          <NavigationMenuItem className="">
            <Link href={'/aboutus'} className="text-sm">
              About Us
            </Link>
          </NavigationMenuItem>
          {/* 
          <NavigationMenuItem className="">
            <Link href={'/institutions'} className="text-sm">
              Institutions
            </Link>
          </NavigationMenuItem> */}

          <NavigationMenuItem className="">
            <Popover>
              <PopoverTrigger className="flex gap-x-3 items-center text-sm">
                {' '}
                More <IoIosArrowDown />
              </PopoverTrigger>
              <PopoverContent className=" font-normal">
                <div className="flex flex-col gap-y-3">
                  <p> Options</p>
                  {/* <DropdownMenuSeparator /> */}
                  <Link
                    href={'https://sfjbs.talentrecruit.com/career-page'}
                    target="_blank"
                  >
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
                </div>
              </PopoverContent>
            </Popover>
          </NavigationMenuItem>

          <NavigationMenuItem
            className={cn(
              buttonVariants({ variant: 'outline' }),
              'text-base font-light'
            )}
          >
            <Link
              href={'https://lms.bskilling.com/login/signup.php?'}
              className="text-sm"
            >
              Sign Up
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem
            className={cn(
              buttonVariants({ variant: 'outline' }),
              'text-base font-light'
            )}
          >
            <Link
              href={'https://lms.bskilling.com/login/index.php'}
              className="text-sm"
            >
              Login
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger className="xl:hidden p-2">
            <RxHamburgerMenu size={30} />
          </SheetTrigger>
          <SheetContent className="border-none py-5 px-6">
            <h2 className="text-2xl font-bold text-center mb-6">
              <span className="text-blue-500">b</span>Skilling
            </h2>
            <nav className="flex flex-col space-y-4">
              {menus.map((menu) => (
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
            </nav>
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
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
