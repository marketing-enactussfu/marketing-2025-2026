import React from 'react'
import IconLabel from '../components/iconLabel'
import ImgHero from '../components/imgHero'
import Image from "next/image"
import { MdPeople, MdHandshake } from "react-icons/md";
import Button from "../components/button"
import ImgCarousel from '../components/imgCarousel';


function page() {
  return (
    <div className="flex flex-col gap-[16px] md:gap-[64px] pb-[48px]">
      <ImgHero
        header={"Venture Connect"}
        subheader={
          "Venture Connect is an afternoon workshop and fireside chat event that provides aspiring entrepreneurs with the opportunity to create meaningful connections with successful entrepreneurs."
        }
        cta1={"Participant Package"}
        cta2={"Register"}
        img={"/images/ventureConnect 2.png"}
      />

      <div className="section-standard gap-[16px] md:gap-[24px]">
        <h2> More about Venture Connect </h2>
        <h3 className="text-primary-yellow">
          Discover our educational workshops hosted by Enactus SFU, connect with
          like-minded individuals, and learn about sustainable social
          entrepreneurship.
        </h3>
      </div>

      <section className="padding flex flex-col md:flex-row gap-[16px] md:gap-[24px]">
        <IconLabel
          header={"Meaningful Connections"}
          subheader={"Event Objective"}
          body={
            "Provide aspiring entrepreneurs with the opportunity to engage with successful entrepreneurs and startup owners, allowing them to gain valuable insights and create meaningful connections."
          }
          icon={<MdHandshake className="text-primary-red text-4xl" />}
        />

        <IconLabel
          header={"Event Information"}
          subheader={"What you can expect"}
          body={
            "The event will be an interactive workshop and fireside chat with experienced founders and industry leaders, providing opportunities to learn practical skills, gain personal insights, and build meaningful connections that inspire their entrepreneurial growth."
          }
          icon={<MdPeople className="text-primary-red text-4xl" />}
        />
      </section>

      <div className="flex flex-col gap-[24px] padding">
        <ImgCarousel
          Carousel=
          {
            [{ name: "NEED A NEW PHOTO", img: "/images/VentureConnect.png" },
            { name: "NEED A NEW PHOTO", img: "/images/VentureConnect 2.png" },
            { name: "Good Photo", img: "/images/VentureConnect3a.png" }]
          }
        />

        <div className="flex justify-center md:justify-normal pb-[24px]">
          <Button size="large" style="primary" cta="./events">
            {" "}
            ← Return to Events{" "}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default page;
