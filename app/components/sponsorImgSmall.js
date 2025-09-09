import React from "react";
import Image from "next/image";

function sponsorImgSmall({ img, sponsor, width, height }) {
  return (
    <div className="bg-primary-gray rounded-[16px] p-[1%] w-[calc(12%-9px)] text-white">
      <Image
        src={img}
        alt={sponsor}
        width={width}
        height={height}
        className="h-auto rounded-[16px]"
      />
    </div>
  );
}

export default sponsorImgSmall;
