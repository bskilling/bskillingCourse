import React from "react";
import Link from "next/link";

interface Path {
    title: string;
    path: string;
}
interface BreadCrumbsProps {
    breadCrumbs: Path[]
}

const BreadCrumbs: React.FC<BreadCrumbsProps> = ({ breadCrumbs }) => {
    return (
        <section className="relative top-[-20px] md:ml-[-15px]">
            <div className="container max-w-screen-xl mx-auto px-4">
                <ol className="inline-flex flex-wrap text-gray-600 space-x-1 md:space-x-2  md:items-center md:justify-center">
                    {breadCrumbs?.map((breadCrumb, index) => (
                        <li className="inline-flex items-center font-SourceSans" key={index} >
                            {breadCrumb.path ? (
                                <Link
                                    href={breadCrumb.path}
                                    className="text-white text-[16px] font-semibold hover:text-lightBlue tracking-wider"  style={{ textDecoration: 'none' }}
                                >
                                    <h1>{breadCrumb.title}</h1>
                                </Link>
                            ) : (
                                <h1 className="text-gray text-[16px] tracking-wider">{breadCrumb.title}</h1>
                            )
                            }

                            {index < breadCrumbs.length - 1 && (
                                <span className="relative top-[2px] text-gray-600 ml-1 mb-0">{'>'}</span>
                            )}
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
};

export default BreadCrumbs;