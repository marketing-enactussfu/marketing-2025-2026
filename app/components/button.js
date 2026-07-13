import React from "react";

function Button({
  children,
  variant = "primary",
  size = "medium",
  onClick,
  disabled = false,
  className = "",
  type = "button",
  target,
  cta,
}) {
  const baseClasses =
    "items-center text-white hover:text-black hover:cursor-pointer ease-in-out duration-[300ms] focus:bg-red-600 w-fit font-dm-sans font-[600] text-[16px] leading-[1.4]";

  const variants = {
    primary: "bg-[#C70D00] hover:bg-primary-red",
    disabled: "bg-gray-200 text-gray-400",
    icon: "pr-[24px] bg-[#C70D00] hover:bg-primary-red",
  };

  const sizes = {
    small: "px-[16px] py-[10px] rounded-[10px]",
    large: "px-[16px] py-[16px] rounded-[16px]",
  };

  const buttonClasses = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  return (
    <a href={cta} target={target}>
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={buttonClasses}
      >
        {children}
      </button>
    </a>
  );
}

export default Button;
