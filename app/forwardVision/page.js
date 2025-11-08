import React from "react";
import IconLabel from "../components/iconLabel";
import ImgHero from "../components/imgHero";
import Image from "next/image";
import { MdBolt, MdInsights, MdViewInAr } from "react-icons/md";
import Button from "../components/button";
import ImgCarousel from "../components/imgCarousel";

function page() {
  return (
    <div className="flex flex-col mt-[16px] md:mt-0 gap-[16px] md:gap-[64px] pb-[48px]">
      <ImgHero
        header={"Forward Vision"}
        subheader={
          "Showcase your entrepreneurial spirit and skills in our very own competition! Through a Dragon’s Den style pitch competition, teams will get the chance to build a business idea with the mentorship and guidance of industry professionals and experienced entrepreneurs."
        }
        cta1={"Participant Package"}
        cta2={"Register"}
        img={"/images/finalForwardVision.png"}
      />

      <div className="section-standard gap-[16px] md:gap-[24px]">
        <h2> What To Expect At Forward Vision</h2>
        <h3 className="text-primary-yellow">
          Discover our educational workshops hosted by Enactus SFU, connect with
          like-minded individuals, and learn about sustainable social
          entrepreneurship.
        </h3>
      </div>

      <section className="section-standard flex flex-col lg:flex-row gap-[16px] md:gap-[24px]">
        <IconLabel
          header={"Entrepreneurship for Impact"}
          body={
            "Teams will develop small enterprises that address one or more UN Sustainable Development Goals (SDGs)."
          }
          icon={<MdInsights className="text-primary-red text-4xl" />}
        />

        <IconLabel
          header={"Mentorship & Collaboration"}
          body={
            "Over a two-week mentorship phase, teams will participate in the Forward Vision Workshop to connect with mentors, refine their ideas, and prepare for the competition."
          }
          icon={<MdBolt className="text-primary-red text-4xl" />}
        />

        <IconLabel
          header={"Investor-Style Pitching"}
          body={
            "During the final competition, judges will act as investors, and teams will negotiate for funding during an interactive Q&A session."
          }
          icon={<MdViewInAr className="text-primary-red text-4xl" />}
        />
      </section>

      <div className="flex flex-col gap-[24px] md:gap-[48px] padding">
        <Image
          src={"/images/FV.png"}
          alt={"Venture Connect Banner"}
          width={1920}
          height={1080}
          className="w-full h-auto"
          priority
        />

        <h2>
          If the idea of social entrepreneurship excites you, we encourage you
          to participate in Forward Vision! Spots are limited, so be sure to
          register your team before the deadline on A DATE.
        </h2>

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
