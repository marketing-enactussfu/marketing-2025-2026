import React from "react";
import Image from "next/image";

function sponsorImg({ img, sponsor, width, height }) {
  return (
    <div className="bg-primary-gray rounded-[16px] p-[1.6rem] w-[20%] text-white">
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

export default sponsorImg;
