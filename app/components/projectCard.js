import React from "react";
import Image from "next/image";

function projectCard({ img, header, body }) {
  return (
    <div className="relative w-fill flex flex-grow align-center rounded-[16px]">
      <Image
        src={img}
        alt={header}
        width="1200"
        height="1200"
        className="w-100% h-auto"
      />

      <div className="absolute inset-0 bg-no-repeat bg-black/60 hover:bg-black/30 p-[96px] flex flex-col align-center justify-center">
        <h2 className="text-primary-yellow mb-3">
          {header ?? "Project Title"}
        </h2>
        <h3>{body ?? "Body text goes here."}</h3>
      </div>
    </div>
  );
}

export default projectCard;
