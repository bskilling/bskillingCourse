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

const menus = [
  {
    name: 'Home',
    href: '/',
    icon: <RiHome2Line size={20} />,
  },
  {
    name: 'About Us',
    href: '/aboutus',
    icon: <FiFileText size={20} />,
  },
  {
    name: 'Blogs',
    href: '/blogs',
    icon: <BsChatSquareDots size={20} />,
  },
  {
    name: 'Reviews',
    href: '/reviews',
    icon: <BsListStars size={20} />,
  },
  {
    name: 'Career',
    href: 'https://sfjbs.talentrecruit.com/career-page',
    icon: <BsPersonGear size={20} />,
  },
  {
    name: 'Contact',
    href: '/contact',
    icon: <IoIosCall size={20} />,
  },
  {
    name: 'Skills',
    href: '/college-training/skill-assisting-program',
    icon: <BsPersonWorkspace size={20} />,
  },
  {
    name: 'Government Training Program',
    href: '/government-training-program',
    icon: <GrWorkshop size={20} />,
  },
  {
    name: 'Corporate Training Program',
    href: '/corporate-training',
    icon: <BsBuilding size={20} />,
  },
  // {
  //   name: 'Jobs',
  //   href: '/job-assisting-program',
  //   icon: <GrWorkshop size={20} />,
  // },
  {
    name: 'All Courses',
    href: '/individual-training',
    icon: <GoPerson size={20} />,
    type: 'item',
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
      <Sheet>
        <SheetTrigger className="xl:hidden">
          <RxHamburgerMenu size={30} />
        </SheetTrigger>
        <SheetContent className=" border-none">
          <h2 className="text-2xl font-bold">
            <span className="text-blue-400">b</span>
            <span className="text-blue-400  ">Skilling</span>
          </h2>
          {menus.map((menu) => (
            <div key={menu.name} className="flex flex-col gap-y-10 text-base">
              {menu?.type === 'collapse' ? (
                <div className="mt-4">
                  <p
                    className=" inline-flex gap-x-4 cursor-pointer items-center text-base"
                    onClick={() => setClose((prev) => !prev)}
                  >
                    <span>{menu?.icon}</span>
                    <span>{menu.name}</span>
                    <span>
                      <IoChevronDownSharp size={20} />
                    </span>
                  </p>
                </div>
              ) : (
                <div className="mt-5">
                  <Link
                    href={menu.href as string}
                    className=" inline-flex gap-x-4 items-center"
                  >
                    <span>{menu?.icon}</span> {menu.name}
                  </Link>
                </div>
              )}
            </div>
          ))}
        </SheetContent>
      </Sheet>
    </div>
  );
}
