import React from 'react'
import IconLabel from '../components/iconLabel'
import ImgHero from '../components/imgHero'
import Image from "next/image"
import Link from "next/link"
import { MdBolt, MdInsights, MdViewInAr } from "react-icons/md";
import Button from "../components/button"
import ImgCarousel from "../components/imgCarousel"

function page() {
    return (

        <div className='flex flex-col gap-[64px] pb-[48px]'>
            <ImgHero
                header={"Forward Vision"}
                subheader={"Showcase your entrepreneurial spirit and skills in our very own competition! Competitors will be tested on their entrepreneurship, social enterprise, and the practical application of their idea that positively impacts society in a pitch style."}
                cta1={"Participant Package"}
                cta2={"Register"}
                img={"/images/forwardVision.png"}
            />

            <h2 className='px-[100px]'> More about Venture Connect </h2>

            <section className='px-[100px] flex flex-row gap-[24px]'>
                <IconLabel
                    header={"Pitching Streams"}
                    body={"Teams will develop a small enterprise focused on the theme of 'Climate Action'. On the event day, teams will pitch their ideas to a panel of investors to receive fictitious funding for the 'Scale-Up Session'."}
                    icon={<MdInsights className='text-primary-red text-4xl' />} />

                <IconLabel
                    header={"Scale Up"}
                    body={"Each team will be paired with a professional project mentor to guide them in utilizing the funding earned from their pitch to enhance their project."}
                    icon={<MdBolt className='text-primary-red text-4xl' />} />

                <IconLabel
                    header={"Finals"}
                    body={"In the final presentations, all teams will present their refined pitches to a panel of judges."}
                    icon={<MdViewInAr className='text-primary-red text-4xl' />} />
            </section>

            <div className='flex flex-col gap-[24px] px-[100px]'>
                <Image
                    src={"/images/VentureConnect3.png"}
                    alt={"Venture Connect Banner"}
                    width={1920}
                    height={1080}
                    className="w-full h-auto"
                    priority
                />

                <h2>If the idea of social entrepreneurship excites you, we encourage you to participate in Forward Vision! Spots are limited, so be sure to register your team before the deadline on A DATE.</h2>

                <Link href="/">< Button size='large' style='primary'> ← Return to Events </Button></Link>

                <ImgCarousel />
            </div>
        </div>
    )
}


export default page