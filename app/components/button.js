import React from 'react'

function Button({
    children,
    variant = 'primary',
    size = 'medium',
    onClick,
    disabled = false,
    className = '',
    type = 'button'
}) {
    const baseClasses = 'items-center text-black hover:text-white hover:cursor-pointer ease-in-out duration-[300ms] focus:opacity-[80%] w-fit'

    const variants = {
        primary: 'bg-primary-red hover:bg-[#C70D00]',
        disabled: 'bg-gray-200 text-gray-400',
        icon: "pr-[24px] bg-primary-red hover:bg-[#C70D00]"
    }

    const sizes = {
        small: 'px-[16px] py-[10px] rounded-[10px]',
        large: 'px-[16px] py-[16px] rounded-[16px]'
    }

    const buttonClasses = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={buttonClasses}
        >
            {children}
        </button>
    )
}

export default Button