import React from "react";
import Image from "next/image";

function sponsorImgSmall({ img, sponsor, width, height }) {
  return (
    <div className="flex justify-center items-center bg-primary-gray rounded-[6px] md:rounded-[11px] lg:rounded-[16px] p-[1%] w-[calc(25%-12px)] md:w-[calc(16%)] lg:w-[calc(12%-14px)] text-white">
      <Image
        src={img}
        alt={sponsor}
        width={width}
        height={height}
        className="h-auto rounded-[6px] md:rounded-[11px] lg:rounded-[16px]"
      />
    </div>
  );
}

export default sponsorImgSmall;
