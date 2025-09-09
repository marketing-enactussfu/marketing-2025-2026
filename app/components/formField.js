import React from "react";

function formField({ field }) {
  return (
    <div className="flex flex-col grow">
      <p className="text-primary-yellow mb-2">
        {field ?? "Field title goes here."}
      </p>
      <div className="bg-white rounded-[16px] h-[60px]"></div>
    </div>
  );
}

export default formField;
