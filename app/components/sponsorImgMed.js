import React from "react";
import Image from "next/image";

function sponsorImgMed({ img, sponsor, width, height }) {
  return (
    <div className="flex justify-center items-center bg-primary-gray rounded-[8px] md:rounded-[12px] lg:rounded-[16px] p-[2%] min-h-5 aspect-1 w-[calc(50%-10px)] h-[calc(35vw)] md:h-auto md:w-[calc(20vw-56px)] aspect-1 text-white">
      <Image
        src={img}
        alt={sponsor}
        width={width}
        height={height}
        className="w-full h-full object-contain rounded-[6px] md:rounded-[11px] lg:rounded-[16px]"
      />
    </div>
  );
}

export default sponsorImgMed;
