import React from 'react'
import IconLabel from '../components/iconLabel'
import ImgHero from '../components/imgHero'
import Image from "next/image"
import { MdPeople, MdHandshake } from "react-icons/md";
import Button from "../components/button"


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
            "PSuccessful entrepreneurs will share about their entrepreneurial journey and challenges, failures and lessons. Speakers offer practical advice such as realities of scaling a business."
          }
          icon={<MdPeople className="text-primary-red text-4xl" />}
        />
      </section>

      <div className="flex flex-col gap-[24px] padding">
        <Image
          src={"/images/VentureConnect3.png"}
          alt={"Venture Connect Banner"}
          width={1920}
          height={1080}
          className="w-full h-auto"
          priority
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
