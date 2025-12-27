import Image from "next/image";

import partner1 from "@/public/Images/partner-1.webp"
import partner2 from "@/public/Images/partner-2.webp"
import partner3 from "@/public/Images/partner-3.webp"
import partner4 from "@/public/Images/partner-4.webp"
import partner5 from "@/public/Images/partner-5.webp"
import partner6 from "@/public/Images/partner-6.webp"

export default function WorkBanner() {
  return (
    <>
      <div className="px-[8] lg:px-[10%] py-20 work-banner">
        <div className="work-banner-content flex flex-col h-full lg:flex-row justify-center items-center">
          <h2 className="text-white Rethink text-5xl lg:text-8xl font-bold">
            Transform your vision with Form's expertise
          </h2>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 ]">
        <div className="border-r border-b border-gray-500 p-10 flex items-center justify-center">
          <Image
            src={partner1}
            alt="Partner 1"
            className="opacity-50 hover:opacity-100 transition-all duration-300 cursor-pointer "
          />
        </div>
        <div className="border-r border-b border-gray-500 p-10 flex items-center justify-center">
          <Image
            src={partner2}
            alt="Partner 1"
            className="opacity-50 hover:opacity-100 transition-all duration-300 cursor-pointer "
          />
        </div>
        <div className="border-r border-b border-gray-500 p-10 flex items-center justify-center">
          <Image
            src={partner3}
            alt="Partner 1"
            className="opacity-50 hover:opacity-100 transition-all duration-300 cursor-pointer "
          />
        </div>
        <div className="border-r border-b border-gray-500 p-10 flex items-center justify-center">
          <Image
            src={partner4}
            alt="Partner 1"
            className="opacity-50 hover:opacity-100 transition-all duration-300 cursor-pointer "
          />
        </div>
        <div className="border-r border-b border-gray-500 p-10 flex items-center justify-center">
          <Image
            src={partner5}
            alt="Partner 1"
            className="opacity-50 hover:opacity-100 transition-all duration-300 cursor-pointer "
          />
        </div>
        <div className="border-r border-b border-gray-500 p-10 flex items-center justify-center">
          <Image
            src={partner6}
            alt="Partner 1"
            className="opacity-50 hover:opacity-100 transition-all duration-300 cursor-pointer "
          />
        </div>
       
      </div>
    </>
  );
}
