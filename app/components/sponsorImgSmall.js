import React from "react";
import Image from "next/image";

function sponsorImgSmall({ img, sponsor, width, height }) {
  return (
    <div className="bg-primary-gray rounded-[16px] p-[1%] w-[calc(12.5%-20px)] text-white">
      <Image
        src={img}
        alt={sponsor}
        width={width}
        height={height}
        className="w-auto h-full rounded-[16px]"
      />
    </div>
  );
}

export default sponsorImgSmall;
