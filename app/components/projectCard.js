import React from "react";
import Image from "next/image";

function projectCard({ img, header, body }) {
  return (
    <div className="relative w-full flex flex-grow rounded-[16px] min-[86rem]:max-w-[45%] h-[400px] overflow-auto group">
      <Image
        src={img}
        alt={header}
        fill
        className="object-cover brightness-75"
        priority
        unoptimized
      />

      <div className="tabindex-1 absolute inset-0 bg-no-repeat bg-black/30 hover:bg-black/65 active:bg-black/65 p-[32px] md:p-[96px] flex flex-col items-center transition-all duration-[300ms] ease-in-out hover:cursor-pointer overflow-scroll">
        <h2 className="text-primary-yellow mb-3 mt-[16px]">
          {header ?? "Project Title"}
        </h2>
        <h3 className="opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-[300ms] ease-in-out">
          {body ?? "Body text goes here."}
        </h3>
      </div>
    </div>
  );
}

export default projectCard;
