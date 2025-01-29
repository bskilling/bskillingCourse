import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Skeleton } from '@/components/ui/skeleton';
import usePrograms from '@/lib/hooks/usePrograms';
import Link from 'next/link';
import React, { useEffect, useMemo, useState } from 'react';
import { FaAngleDown } from 'react-icons/fa';
import { RxHamburgerMenu } from 'react-icons/rx';

const breakpoints = [
  { width: 1800, items: 14 }, // Ultra-wide screens
  { width: 1600, items: 10 }, // Extra-large screens
  { width: 1440, items: 10 }, // 2xl screens
  { width: 1280, items: 8 }, // xl screens
  { width: 1100, items: 6 }, // Between xl and lg
  { width: 1024, items: 3 }, // Laptops (lg)
  { width: 900, items: 2 }, // Between tablets and laptops
  { width: 768, items: 0 }, // Tablets (md)
];

export default function Categories() {
  const { data, isLoading, error } = usePrograms();
  const [currentCat, setCurrentCat] = useState('Artificial intelligence');
  const [windowWidth, setWindowWidth] = useState<number>(
    typeof window !== 'undefined' ? window.innerWidth : 1440
  );

  useEffect(() => {
    const updateWidth = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const { visibleItems, hiddenItems } = useMemo(() => {
    if (!data) return { visibleItems: [], hiddenItems: [] };
    const maxItems =
      breakpoints.find((bp) => windowWidth >= bp.width)?.items || 1;
    const keys = Object.keys(data);
    return {
      visibleItems: keys.slice(0, maxItems),
      hiddenItems: keys.slice(maxItems),
    };
  }, [windowWidth, data]);
  if (isLoading) return <CategorySkelton />;

  return (
    <div className="flex items-center  gap-x-4 2xl:px-14 px-5 py-5 bg-muted">
      <Popover>
        <PopoverTrigger className=" md:flex ">
          {' '}
          <div className="flex gap-x-2 items-center  font-medium">
            Courses <FaAngleDown />
          </div>
        </PopoverTrigger>
        <PopoverContent className=" 2xl:w-[800px] md:w-[600px] w-[95vw] flex m-auto md:ml-10  mt-3 max-h-[600px] ">
          <div className="flex flex-col gap-y-5">
            {data &&
              Object.entries(data).map(([key, value]) => (
                <p key={key} className="text-sm">
                  {key}
                </p>
              ))}
          </div>{' '}
          <div className="border-l pl-3 flex flex-col gap-y-5 ml-2">
            {data &&
              data[currentCat].map((content, key) => (
                <div key={key} className="w-full text-sm">
                  <Link
                    href={'courses/course-details/' + content?.url}
                    key={content._id}
                  >
                    <p>{content?.title}</p>
                  </Link>
                </div>
              ))}
          </div>
        </PopoverContent>
      </Popover>
      <div className="w-full">
        {visibleItems.map((key) => (
          <Link
            key={key}
            href={`/individual-training?tab=${key}`}
            className="text-sm"
          >
            {key}
          </Link>
        ))}
        {hiddenItems?.length > 0 && (
          <Popover>
            <PopoverTrigger>
              <RxHamburgerMenu size={20} />
            </PopoverTrigger>
            <PopoverContent className="flex flex-col gap-y-4">
              {hiddenItems.map((key) => (
                <Link
                  key={key}
                  href={`/individual-training?tab=${key}`}
                  className="text-sm"
                >
                  {key}
                </Link>
              ))}
            </PopoverContent>
          </Popover>
        )}
      </div>
    </div>
  );
}

function CategorySkelton() {
  return (
    <>
      <div className="flex  gap-2">
        <Skeleton className="w-[100px] h-[20px] rounded-full" />
        <Skeleton className="w-[100px] h-[20px] rounded-full" />
        <Skeleton className="w-[100px] h-[20px] rounded-full" />
        <Skeleton className="w-[100px] h-[20px] rounded-full" />
        <Skeleton className="w-[100px] h-[20px] rounded-full" />
        <Skeleton className="w-[100px] h-[20px] rounded-full" />

        <Skeleton className="w-[100px] h-[20px] rounded-full" />
        <Skeleton className="w-[100px] h-[20px] rounded-full" />
        <Skeleton className="w-[100px] h-[20px] rounded-full" />
        <Skeleton className="w-[100px] h-[20px] rounded-full" />
        <Skeleton className="w-[100px] h-[20px] rounded-full" />
        <Skeleton className="w-[100px] h-[20px] rounded-full" />
        <Skeleton className="w-[100px] h-[20px] rounded-full" />
        <Skeleton className="w-[100px] h-[20px] rounded-full" />
        <Skeleton className="w-[100px] h-[20px] rounded-full" />

        <Skeleton className="w-[100px] h-[20px] rounded-full" />
        <Skeleton className="w-[100px] h-[20px] rounded-full" />
        <Skeleton className="w-[100px] h-[20px] rounded-full" />
      </div>
    </>
  );
}
