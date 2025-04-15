import { createContext, useState } from 'react';
export interface FormValues {
  name: string;
  email: string;
  phone: string;
  batch: string;
}
export type SearchCourseArray = {
  id: string;
  CourseName: string;
  certificate: string;
  imageSrc: string;
  timePeriod: string;
  StartDate: string;
  classType: string;
  price: string;
  CourseLink: string;
  discount?: string;
};

type MyContextType = {
  searchData: SearchCourseArray[];
  setSearchData: React.Dispatch<React.SetStateAction<SearchCourseArray[]>>;
  dropSearchData: SearchCourseArray[];
  setDropSearchData: React.Dispatch<React.SetStateAction<SearchCourseArray[]>>;
  currentTab: string;
  setCurrentTab: React.Dispatch<React.SetStateAction<string>>;
  buttonIndex: number;
  setButtonIndex: React.Dispatch<React.SetStateAction<number>>;
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  tabVisible: boolean;
  setTabVisible: React.Dispatch<React.SetStateAction<boolean>>;
  loadingVisible: boolean;
  setLoadingVisible: React.Dispatch<React.SetStateAction<boolean>>;
  clickOnSearch: boolean;
  setClickOnSearch: React.Dispatch<React.SetStateAction<boolean>>;
  fetchSearchData: SearchCourseArray[]; // update types here
  setFetchSearchData: React.Dispatch<React.SetStateAction<SearchCourseArray[]>>;
  AllCourseButtonIndex: number;
  setAllCourseButtonIndex: React.Dispatch<React.SetStateAction<number>>;
  setCategoryVisible: React.Dispatch<React.SetStateAction<boolean>>;
  categoryVisible: boolean;
  setIsDropdownOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isDropdownOpen: boolean;
  setIsDropdownOpenInListCrs: React.Dispatch<React.SetStateAction<boolean>>;
  isDropdownOpenInListCrs: boolean;
  formData: FormValues | null;
  setFormData: React.Dispatch<React.SetStateAction<FormValues | null>>;
};

export const MyContext = createContext<MyContextType>({
  searchData: [],
  setSearchData: () => {},
  dropSearchData: [],
  setDropSearchData: () => {},
  currentTab: 'SAP',
  setCurrentTab: () => {},
  buttonIndex: 0,
  setButtonIndex: () => {},
  inputValue: '',
  setInputValue: () => {},
  tabVisible: true,
  setTabVisible: () => {},
  loadingVisible: false,
  setLoadingVisible: () => {},
  clickOnSearch: false,
  setClickOnSearch: () => {},
  fetchSearchData: [],
  setFetchSearchData: () => {},
  AllCourseButtonIndex: 0,
  setAllCourseButtonIndex: () => {},
  categoryVisible: false,
  setCategoryVisible: () => {},
  isDropdownOpen: false,
  setIsDropdownOpen: () => {},
  isDropdownOpenInListCrs: false,
  setIsDropdownOpenInListCrs: () => {},
  formData: null,
  setFormData: () => {},
});
type MyProviderProps = {
  children: React.ReactNode;
};

export const MyProvider: React.FC<MyProviderProps> = ({ children }) => {
  const [searchData, setSearchData] = useState<SearchCourseArray[]>([]);
  const [dropSearchData, setDropSearchData] = useState<SearchCourseArray[]>([]);
  const [currentTab, setCurrentTab] = useState('SAP');
  const [buttonIndex, setButtonIndex] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [tabVisible, setTabVisible] = useState(true);
  const [loadingVisible, setLoadingVisible] = useState(false);
  const [clickOnSearch, setClickOnSearch] = useState(false);
  const [fetchSearchData, setFetchSearchData] = useState<SearchCourseArray[]>([]);
  const [AllCourseButtonIndex, setAllCourseButtonIndex] = useState(0);
  const [categoryVisible, setCategoryVisible] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownOpenInListCrs, setIsDropdownOpenInListCrs] = useState(false);
  const [formData, setFormData] = useState<FormValues | null>(null);
  const value: MyContextType = {
    searchData,
    setSearchData,
    dropSearchData,
    setDropSearchData,
    currentTab,
    setCurrentTab,
    buttonIndex,
    setButtonIndex,
    inputValue,
    setInputValue,
    tabVisible,
    setTabVisible,
    loadingVisible,
    setLoadingVisible,
    clickOnSearch,
    setClickOnSearch,
    fetchSearchData,
    setFetchSearchData,
    AllCourseButtonIndex,
    setAllCourseButtonIndex,
    categoryVisible,
    setCategoryVisible,
    isDropdownOpen,
    setIsDropdownOpen,
    isDropdownOpenInListCrs,
    setIsDropdownOpenInListCrs,
    formData,
    setFormData,
  };

  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
};
