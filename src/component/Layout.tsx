/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import Script from 'next/script';
import { ReactNode, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { BiMenu, BiSearchAlt } from 'react-icons/bi';
import { SlArrowDown } from 'react-icons/sl';
import { MyContext } from 'context/PageContext';
import courseSearchData from 'data/courseSearchData';
import Link from 'next/link';
import { useRouter } from 'next/router';
import axios from 'axios';
import { FaBars, FaTimes, FaWhatsapp } from 'react-icons/fa';
import Footer from './Footer';
import LandingFooter from './LandingFooter';
import { Course } from 'common/util/types';
import PopupForm from './PopupForm';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from '@/components/ui/navigation-menu';
// import NavbarSection from './navbar/NavbarSection';
import Courses from './courses';
import NavSection from './navbar/NavSection';
import { usePathname } from 'next/navigation';
// import Categories from './navbar/Categories';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import QueryForm from '@/components/global/QueryForm';
import NavbarSection from './new/Navbar';
import WhatsAppFloatingButton from './new/whatspp';

// import Footer from "./Footer";

type Props = {
  children: ReactNode;
  pageTitle?: string;
};
const Layout = ({ children, pageTitle = 'bSkilling' }: Props) => {
  const route = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: any) => {
    console.log(`Selected: ${option}`);
    setIsOpen(false);
  };
  const { inputValue, setInputValue, setFetchSearchData } = useContext(MyContext);
  const [aboutUnderline, setAboutUnderline] = useState(false);
  const [blogUnderline, setBlogUnderline] = useState(false);
  const [navHide, setNavHide] = useState(false);
  const [dropSearchData, setDropSearchData] = useState<Course[]>([]);
  const [SearchElementsData, setSearchElementsData] = useState<Course[]>([]);
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [categories, setCategories] = useState<Course[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const [isCategoryHovered, setIsCategoryHovered] = useState<boolean>(false);
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOtherMenuOpen, setisOtherMenuOpen] = useState(false);
  const pathName = usePathname();
  const [sheetOpen, setSheetOpen] = useState(false);

  const handleOpenPopup = () => setPopupOpen(true);
  const handleClosePopup = () => setPopupOpen(false);

  const homePage = route.pathname === '/';

  useEffect(() => {
    console.log('pathName', pathName);
    setSheetOpen(false);
  }, [pathName]);

  const fetchApiData = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_TRAINING_BASE_URL}api/v1/get-course-title`
      );

      const jsonData = response.data;
      console.log('res', jsonData);
      const ListOfCoursesData = Object.values(jsonData.courses);
      console.log('res', ListOfCoursesData);
      const flattenedData = ListOfCoursesData.flatMap(innerArray => innerArray);

      setSearchElementsData(flattenedData as Course[]);
    } catch (error) {
      console.error('Error fetching API:', error);
    }
  };

  useEffect(() => {
    fetchApiData();
  }, []);

  useEffect(() => {
    if (route.pathname === '/about') {
      setNavHide(true);
      setAboutUnderline(true);
      setBlogUnderline(false);
    } else if (route.pathname === '/PaymentStatus') {
      setNavHide(false);
    } else if (route.pathname === '/blogs') {
      setBlogUnderline(true);
      setAboutUnderline(false);
    } else {
      setNavHide(true);
      setAboutUnderline(false);
      setBlogUnderline(false);
    }
  }, [route.pathname]);

  useEffect(() => {
    setFetchSearchData(courseSearchData);
  }, []);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setInputValue(value);
    if (value === '') {
      setDropSearchData([]);
    } else {
      const filteredData = SearchElementsData.filter(course =>
        course.title.toLowerCase().includes(value.toLowerCase())
      );

      setDropSearchData(filteredData as Course[]);
    }
  };

  const handleButtonHover = () => {
    setDropdownOpen(true);
  };

  const handleButtonLeave = () => {
    setDropdownOpen(false);
  };

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  const handleDropdownHover = useCallback(() => {
    setDropdownOpen(true);
  }, []);

  const handleDropdownLeave = useCallback(() => {
    setDropdownOpen(false);
  }, []);

  const handleCategoryHover = (category: any) => {
    setSelectedCategory(category);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const toggleMenuotherpages = () => {
    setisOtherMenuOpen(!isOtherMenuOpen);
  };

  const uniqueCategories = Array.from(new Set(SearchElementsData.map(course => course.category)));
  const filteredCourses = uniqueCategories.flatMap(category =>
    selectedCategory === category
      ? SearchElementsData.filter(course => course.category === category)
      : []
  );
  const pathname = usePathname();
  const isVisible = useMemo(() => {
    let exist = true;
    if (pathname) {
      if (
        pathname.split('/').includes('ksdc') ||
        pathname.split('/').includes('government-training-program') ||
        pathname.split('/').includes('individual-training') ||
        pathname.split('/').includes('reviews') ||
        pathname.split('/').includes('institutions') ||
        pathname.split('/').includes('course') ||
        pathname.split('/').includes('courseDetails')
      ) {
        return false;
      }
    }

    return exist;
  }, [pathname]);
  const [show, setShow] = useState(false);
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="bSkilling" content="bSkilling" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon_io/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon_io/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon_io/favicon-16x16.png" />
        <link rel="manifest" href="/favicon_io/site.webmanifest" />
      </Head>
      <Script id="razorpay-checkout-js" src="https://checkout.razorpay.com/v1/checkout.js" />

      <>
        {navHide && isVisible && (
          <>
            <NavbarSection />
          </>
        )}

        <main className="">{children}</main>

        <QueryForm />
        <WhatsAppFloatingButton />
        <Footer />
      </>
    </>
  );
};

export default Layout;
