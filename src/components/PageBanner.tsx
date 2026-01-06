"use client";

import Image from "next/image";

interface PageBannerProps {
  title: string;
  image?: string;
}

const PageBanner =({ title, image }: PageBannerProps) => {
  return (
    <div className="w-full flex flex-col justify-center items-center  bg-opacity-80 text-white">
      
      {image && (
        <Image
          src={image}
          alt="Banner Image"
          width={200}
          height={120}
          className="mb-3 object-cover w-full h-full"
        />
      )}

      <h1 className="text-3xl font-semibold">{title}</h1>
    </div>
  );
}
 export default PageBanner;