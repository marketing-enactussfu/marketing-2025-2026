'use client'

import React from 'react'
import Icon from '@mdi/react'
import { mdiInstagram, mdiLinkedin, mdiEmailOutline } from '@mdi/js'
import Button from "../components/button"
import { DM_Sans } from 'next/font/google'
import Image from 'next/image'

const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-dm-sans' })

function Footer() {
    const currentYear = new Date().getFullYear()

    const handleCopyEmail = async () => {
        try {
            await navigator.clipboard.writeText('email placeholder')
            window.alert('copied to clipboard')
        } catch (err) {
            window.alert('failed to copy')
        }
    }

    return (
        <footer className={`bg-[#121212] h-fit lg:mt-0 mt-[24px]`}>
            <div className="gutter pt-16 pb-10  h-fit">
                {/* Top row: Brand + Subscribe */}
                <div className="flex flex-col lg:flex-row gap-8 md:items-start md:justify-between lg:h-[40vh] w-full">

                    <div className="flex flex-col  min-h-full h-full justify-between max-w-full lg:max-w-[30%] lg:mt-0 md:mt-0 mt-[24px]">
                        <div className="flex items-end gap-[18px] w-fit h-auto">

                            <Image
                                src="/images/logo.svg"
                                alt="Enactus SFU Logo"
                                width={200}
                                height={64}
                                className="w-[4vw] h-auto"
                            />
                            <div
                                className="text-[3vw] text-[#FFD156] font-bold leading-[1.1] tracking-[-0.025em] whitespace-nowrap">
                                Enactus SFU
                            </div>
                        </div>
                        <p className="max-w-[538px] text-[14px] leading-relaxed text-[#D4D4D4] mt-[12px] ">
                            Enactus is a social entrepreneurship organization that focuses on creating projects that impact with a
                            focus of sustainability, economic empowerment, and growth.
                        </p>

                        <div className=' flex-1 flex flex-col w-full h-full justify-end lg:mt-[0] md:mt-[0] mt-[64px] '>
                            <div className="flex items-center gap-6  py-[16px] ">
                                {/* Instagram */}
                                <a href="https://www.instagram.com/enactussfu/" aria-label="Instagram" className="group">
                                    <div className="grid h-[40px] w-[40px] place-items-center rounded-full bg-[#262626]">
                                        <Icon path={mdiInstagram} size={1} className="text-white" />
                                    </div>
                                </a>
                                {/* LinkedIn */}
                                <a href="https://www.linkedin.com/company/enactussfu/?originalSubdomain=ca" aria-label="LinkedIn" className="group">
                                    <div className="grid h-[40px] w-[40px] place-items-center rounded-full bg-[#262626]">
                                        <Icon path={mdiLinkedin} size={1} className="text-white" />
                                    </div>
                                </a>
                                {/* Email (copies) */}
                                <button type="button" onClick={handleCopyEmail} aria-label="Copy email address" className="group">
                                    <div className="grid h-[40px] w-[40px] place-items-center rounded-full bg-[#262626]">
                                        <Icon path={mdiEmailOutline} size={1} className="text-white" />
                                    </div>
                                </button>
                            </div>

                            <div className='flex flex-col h-fit'>
                                <div className="text-[16px] font-medium tracking-[-0.015em] text-[#737373]">
                                    Copyright © Enactus {currentYear}. All rights reserved.
                                </div>
                                <div className="flex items-center gap-4 text-[16px] font-medium tracking-[-0.015em] text-[#F5F5F5]">
                                    <a href="#" className="transition ease-in-out duration-100 hover:underline hover:cursor-pointer">Privacy Policy</a>
                                    <span>|</span>
                                    <a href="#" className="transition ease-in-out duration-100 hover:underline hover:cursor-pointer">Land Acknowledgment</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className=' flex flex-col gap-[12px] justify-right'>
                        <h5 className='text-[#FFC220] font-bold lg:mt-0 md:mt-0 mt-[24px]'> Sign up for our Newsletter!</h5>
                        < Button size='large' style='primary' target="_blank" cta="https://mailchi.mp/962e35d5baa4/enactus-sfu-mailchimp-sign-up">
                            Sign Up
                        </Button>
                    </div>

                    {/* Link columns */}
                    <div className="grid grid-cols-2 gap-[12px] md:grid-cols-4 max-w-[100%] lg:max-w-[40%] w-full  h-fit">
                        {/* Organization */}
                        <div className="space-y-4">
                            <div className="text-[14px] font-semibold tracking-[-0.025em] text-[#FFC220]">Organization</div>
                            <div className="space-y-4 text-[14px] text-[#D4D4D4] flex flex-col">
                                {['The Team', 'About Us', 'History', 'Awards'].map((label) => (
                                    <a key={label} href="#" className="transition ease-in-out duration-100 hover:underline hover:cursor-pointer">
                                        {label}
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Projects */}
                        <div className="space-y-4">
                            <div className="text-[14px] font-semibold tracking-[-0.025em] text-[#FFC220]">Projects</div>
                            <div className="space-y-4 text-[14px] text-[#D4D4D4] flex flex-col">
                                {['Unify', 'SKYES', 'Alara', 'Nourish', 'NextSpark'].map((label) => (
                                    <a key={label} href="#" className="transition ease-in-out duration-100 hover:underline hover:cursor-pointer">
                                        {label}
                                    </a>
                                ))}
                            </div>
                        </div>


                        <div className="space-y-4">
                            <div className="text-[14px] font-semibold tracking-[-0.025em] text-[#FFC220]">Past Projects</div>
                            <div className="space-y-4 text-[14px] text-[#D4D4D4] flex flex-col">
                                {[
                                    'Kindred Knots',
                                    'Bright Ideas',
                                    'Banner Bags',
                                    'Coast Cards',
                                    'Count on Me',
                                    'Changemaker Challenge',
                                    'Media Minds',
                                    'Refresh',
                                ].map((label) => (
                                    <a key={label} href="#" className="block transition ease-in-out duration-100 hover:underline hover:cursor-pointer">
                                        {label}
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Get Involved */}
                        <div className="space-y-4">
                            <div className="text-[14px] font-semibold tracking-[-0.025em] text-[#FFC220]">Get Involved</div>
                            <div className="space-y-4 text-[14px] text-[#D4D4D4] flex flex-col">
                                {['Careers', 'Sponsor Us', 'Contact Us'].map((label) => (
                                    <a key={label} href="#" className="transition ease-in-out duration-100 hover:underline hover:cursor-pointer">
                                        {label}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer >
    )
}

export default Footer 