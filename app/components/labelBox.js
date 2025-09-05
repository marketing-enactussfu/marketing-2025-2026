import React from "react";
import Image from "next/image";

function labelBox({ icon, header, desc }) {
  return (
    <div className="rounded-[16px] bg-primary-gray p-12">
      {/* {icon} */}
      <Image
        src="/pngtest.png"
        alt="Hero Image"
        width={800}
        height={600}
        className="w-full h-auto"
        priority
      />

      <h2 className="text-primary-yellow">{header ?? "000,000+"}</h2>
      <h4 className="text-white">{desc ?? "Description goes here."}</h4>
    </div>
  );
}

export default labelBox;
