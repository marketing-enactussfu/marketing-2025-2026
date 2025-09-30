"use client"

import React, { useState } from "react";
import Image from "next/image";
import Button from "./button";
import Link from "next/link";
import { MdConstruction, MdDensitySmall } from "react-icons/md";

function Navbar() {
    const navItems = [
        { label: "Home", link: "/" },
        { label: "About", link: "/about" },
        { label: "Team", link: "/team" },
        { label: "Projects", link: "/projects" },
        { label: "Events", link: "/events" },
        { label: "Sponsorships", link: "/sponsor" },
        { label: "Competition", link: "/competition" },
    ];

    const [open, setOpen] = useState(true);

    return (
        <div className="flex flex-row justify-between lg:items-center items-start align-top w-[100%] bg-black text-white px-8 lg:py-[12px] py-[32px]  h-fit">
            <div className={`flex lg:flex-row flex-col w-full transition-all
                ${open === false ? "gap-[12px]" : "gap-[0px]"}`}>
                <div className="w-full">
                    <Link href="/">
                        <Image
                            src="/images/Logo.svg"
                            alt="Enactus SFU Logo"
                            width={20}
                            height={20}
                            className="h-[20px] w-auto"
                        />
                    </Link>
                </div>
                <div className={`w-full flex  lg:justify-center transition-all ease-in-out duration-[300ms]
                    ${open === true ? "lg:h-full lg:max-h-full lg:opacity-[100%] max-h-[0] opacity-0" : "max-h-[40vh] opacity-[100%]"}`}>
                    <nav className="flex items-start lg:flex-row flex-col lg:items-center gap-6">
                        {navItems.map((item) => (
                            <Link
                                key={item.label}
                                href={item.link}
                                className="opacity-60 hover:opacity-100 text-white leading-none transition-all"
                                onClick={() => setOpen(false)}
                            >
                                <h5>{item.label}</h5>
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>
            <div className="justify-end flex-row  h-[100%] w-[45%]">


                <div className="hidden w-full lg:flex flex-row justify-end">
                    <Button size="small" variant="icon">
                        <div className="flex flex-row gap-2">
                            <MdConstruction className="text-xl" />
                            CTA
                        </div>
                    </Button>
                </div>
                <div className='lg:hidden flex flex-row justify-end'>
                    <button onClick={() => setOpen(!open)}>
                        <MdDensitySmall className="text-xl" />
                    </button>
                </div>
            </div>

        </div >
    );
}

export default Navbar;
