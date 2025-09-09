import React from "react";
import Image from "next/image";

function sponsorImgMed({ img, sponsor, width, height }) {
  return (
    <div className="bg-primary-gray rounded-[16px] p-[2%] w-[calc(20%-16px)] text-white">
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

export default sponsorImgMed;
