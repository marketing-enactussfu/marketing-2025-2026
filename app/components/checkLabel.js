import React from "react";
import { IoCheckmarkDone } from "react-icons/io5";

function checkLabel({ header, body }) {
  return (
    <div className="p-[48px] w-fill bg-primary-gray rounded-[16px] flex flex-col gap-[16px]">
      <IoCheckmarkDone size={60} color={"var(--color-primary-red)"} />

      <div className="flex flex-col gap-[8px]">
        <h2 className="text-primary-yellow">{header}</h2>
      </div>
      <h3>{body}</h3>
    </div>
  );
}

export default checkLabel;
