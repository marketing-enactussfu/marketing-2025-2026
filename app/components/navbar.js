import React from "react";
import Image from "next/image";
import Button from "./button";
import Link from "next/link";
import { MdAdd, MdBuild, MdConstruction } from "react-icons/md";

function Navbar() {
    const navItems = [
        { label: "Home", link: "/" },
        { label: "About", link: "/about" },
        { label: "History", link: "/history" },
        { label: "Projects", link: "/projects" },
        { label: "Events", link: "/events" },
        { label: "Sponsorships", link: "/sponsorships" },
        { label: "Competitors", link: "/competitors" },
    ];

    return (
        <div className="flex flex-row justify-between items-center w-[100%] bg-black text-white px-8 py-[12px]">
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
            <div className="w-full flex items-center justify-center">
                <nav className="flex items-center gap-6">
                    {navItems.map((item) => (
                        <Link
                            key={item.label}
                            href={item.link}
                            className="opacity-60 hover:opacity-100 text-white leading-none transition-all"
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>
            </div>
            <div className="w-full justify-end flex flex-row">
                <Button size="small" variant="icon">
                    <div className="flex flex-row gap-2">
                        <MdConstruction className="text-xl" />
                        CTA
                    </div>
                </Button>
            </div>

            {/* {["home", "string2", "string3"].map((label) => (

                <a key={(label)}>{label}</a>
            ))} */}
        </div>
    );
}

export default Navbar;
