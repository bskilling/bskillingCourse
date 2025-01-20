import React, { useEffect, useMemo, useState } from 'react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import Link from 'next/link';
import { cn } from '@/lib/utils';

import { MdCorporateFare } from 'react-icons/md';
import {
  IoChevronDownSharp,
  IoHome,
  IoNewspaper,
  IoSchool,
} from 'react-icons/io5';
import { GrUserWorker, GrWorkshop } from 'react-icons/gr';
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
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { PiNewspaperFill } from 'react-icons/pi';

import { RxHamburgerMenu } from 'react-icons/rx';
import { icon } from '@fortawesome/fontawesome-svg-core';
import { IoIosArrowDown, IoIosCall } from 'react-icons/io';
import { FaProductHunt } from 'react-icons/fa';
import { usePathname, useRouter } from 'next/navigation';
import { FiFileText } from 'react-icons/fi';
import { GoPerson } from 'react-icons/go';

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
    name: 'Training Programs',
    type: 'collapse',
    icon: <BsPersonVideo3 size={20} />,
    children: [
      {
        name: 'Individual Training',
        href: '/individual-training',
        icon: <GoPerson size={20} />,
        type: 'item',
      },
      {
        name: 'Corporate Training',
        href: '/corporate-training',
        type: 'item',
      },
    ],
  },
  {
    name: 'College Training',
    type: 'collapse',
    icon: <BsBuilding size={20} />,
    children: [
      {
        name: 'Skill Assisting Program',
        href: '/college-training/skill-assisting-program',
      },
      {
        name: 'Job Assisting Program',
        href: '/job-assisting-program',
      },
      {
        name: 'Government Training Program',
        href: '/training-programs/government-training-program',
      },
    ],
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
            <Link href="/aboutus">
              <NavigationMenuLink>About</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/blogs">
              <NavigationMenuLink>Blogs</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/reviews">
              <NavigationMenuLink>Reviews</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          {/* <NavigationMenuItem>
            <Link
              href="https://sfjbs.talentrecruit.com/career-page"  
              target="_blank"
            >
              <NavigationMenuLink
                className={cn(navigationMenuTriggerStyle(), 'text-foreground')}
              >
                Careers
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem> */}

          <NavigationMenuItem>
            <Popover open={open2} onOpenChange={setOpen2}>
              <PopoverTrigger className=" inline-flex gap-x-2 cursor-pointer items-center">
                {' '}
                Training Programs <IoIosArrowDown />
              </PopoverTrigger>
              <PopoverContent className="font-normal">
                <div className="flex flex-col gap-y-3">
                  <p>Training Options</p>
                  {/* <DropdownMenuSeparator /> */}
                  <div
                    className="text-foreground inline-flex gap-x-2 cursor-pointer items-center"
                    onClick={() => {
                      setCollege((prev) => !prev);
                    }}
                  >
                    <IoSchool size={20} className="mx-2" />
                    <p>Individual Courses</p>
                  </div>
                  <div className="text-foreground inline-flex gap-x-2">
                    {' '}
                    <MdCorporateFare className="mx-2" size={20} />
                    <Link
                      href={'/corporate-training'}
                      className="text-foreground"
                    >
                      Corporate Training
                    </Link>
                  </div>
                  <div
                    className="text-foreground inline-flex gap-x-2 cursor-pointer items-center"
                    onClick={() => {
                      setCollege((prev) => !prev);
                    }}
                  >
                    <IoSchool size={20} className="mx-2" />
                    <p>College Training</p>
                  </div>
                  {college && (
                    <>
                      <div className="bg-muted rounded-md pl-2 py-2 flex flex-col gap-y-3 text-sm">
                        <div className="text-foreground inline-flex gap-x-2">
                          <GrUserWorker size={20} className="mx-2" />
                          <Link
                            href={'/college-training/skill-assisting-program'}
                          >
                            Skill Assisting Program
                          </Link>
                        </div>
                        <div className="text-foreground inline-flex gap-x-2">
                          <BsPersonWorkspace size={20} className="mx-2" />
                          <Link href={'/college-training'}>
                            Job Assisting Program
                          </Link>
                        </div>
                        <div className="text-foreground inline-flex gap-x-2">
                          <RiGovernmentFill size={20} className="mx-2" />
                          <Link
                            href={
                              '/training-programs/government-training-program'
                            }
                          >
                            Government Program
                          </Link>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </PopoverContent>
            </Popover>
          </NavigationMenuItem>
          <NavigationMenuItem className="">
            <Popover>
              <PopoverTrigger className="flex gap-x-3 items-center">
                {' '}
                More <IoIosArrowDown />
              </PopoverTrigger>
              <PopoverContent className=" font-normal">
                <div className="flex flex-col gap-y-3">
                  <p> Options</p>
                  {/* <DropdownMenuSeparator /> */}
                  <div
                    className="text-foreground inline-flex gap-x-2 cursor-pointer items-center"
                    onClick={() => {
                      setCollege((prev) => !prev);
                    }}
                  >
                    <IoSchool size={20} className="mx-2" />
                    <p>Career</p>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
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
                  {close && (
                    <div className="pl-4">
                      {menu?.children?.map((child) => (
                        <div key={child.name}>
                          {child?.type === 'collapse' ? (
                            <div className="mt-5">
                              <div
                                className="font-bold text-gray-600"
                                onClick={() => setOpen((prev) => !prev)}
                              >
                                {child.name}
                              </div>
                              {open && (
                                <div className="pl-4">
                                  {child?.children?.map((child) => (
                                    <div
                                      key={child.name}
                                      className="text-sm mt-4"
                                    >
                                      <Link
                                        href={child.href as string}
                                        className="inline-flex gap-x-2"
                                      >
                                        <span>{menu?.icon}</span> {child.name}
                                      </Link>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          ) : (
                            <div className="text-sm mt-4">
                              <Link
                                href={child.href as string}
                                className="inline-flex gap-x-2"
                              >
                                <span>{menu?.icon}</span>
                                {child.name}
                              </Link>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
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
