import React from "react";
import { IoCheckmarkDone } from "react-icons/io5";

function checkLabel({ header, body }) {
  return (
    <div className="p-[48px] bg-primary-gray rounded-sm flex flex-col gap-[16px] sm:w-[100%] md:[w-50%] lg:w-max">
      <IoCheckmarkDone size={60} color={"var(--color-primary-red)"} />

      <div className="flex flex-col gap-[8px]">
        <h1 className="text-primary-yellow">{header}</h1>
      </div>
      <h3>{body}</h3>
    </div>
  );
}

export default checkLabel;
