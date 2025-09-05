import React from "react";

function labelRow({ title, year, body }) {
  return (
    <div className="flex flex-row gap-[48px] rounded-[16px] bg-primary-gray p-[1.6rem] items-center">
      <div className="w-max">
        <h5 className="text-[18px] leading-[1.4] tracking-tight text-[#FAFAFA] mb-[4.5px] text-nowrap font-bold">
          {title ?? "Title"}
        </h5>
        <h6 className="text-[13.5px] leading-[1.4] tracking-tight text-primary-yellow text-nowrap">
          {year ?? "20XX-20XX"}
        </h6>
      </div>

      <p className="mt-4 font-semibold leading-[1.4] text-[#D4D4D4]">
        {body ?? "Body copy goes here as a placeholder."}
      </p>
    </div>
  );
}

export default labelRow;
