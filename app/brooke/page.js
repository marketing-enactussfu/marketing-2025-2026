import React from "react";
import SponsorImgMed from "../components/sponsorImgMed.js";
import SponsorImgSmall from "../components/sponsorImgSmall.js";
import SponsorBanner from "../components/sponsorBanner.js";
import Button from "../components/button.js";

function page() {
  const partnerList = [
    { img: " ", sponsor: "The Old Spaghetti Factory", width: " ", height: " " },
    { img: " ", sponsor: "Steve's Poke Bar", width: " ", height: " " },
    { img: " ", sponsor: "The Hive", width: " ", height: " " },
    { img: " ", sponsor: "Oxygen Yoga & Fitness", width: " ", height: " " },
    { img: " ", sponsor: "Popeye's Supplements", width: " ", height: " " },
    { img: " ", sponsor: "Red Bull", width: " ", height: " " },
    { img: " ", sponsor: "placeholder 1 ", width: " ", height: " " },
    { img: " ", sponsor: "Vancouver Mysteries", width: " ", height: " " },
    { img: " ", sponsor: "placeholder 2", width: " ", height: " " },
    { img: " ", sponsor: "placeholder 3", width: " ", height: " " },
  ];

  const forwardVisionList = [
    {
      img: "/images/FV1.png",
      sponsor: "Something",
      width: "800",
      height: "600",
    },
    {
      img: "/images/FV1.png",
      sponsor: "Something 2",
      width: "800",
      height: "600",
    },
  ];

  return (
    <div className="section-standard">
      <div className="flex flex-col mt-12 mb-12 gap-y-4">
        <h3 className="text-primary-yellow">Sponsorships</h3>

        <h1>Thank you to all our partners!</h1>

        <div className="flex gap-[24px]">
          <Button size="large" variant="primary">
            Become a Sponsor
          </Button>
          <Button size="large" variant="primary">
            Sponsorship Package
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-4 mb-12">
        <h1>Our Partners</h1>

        <div className="flex gap-[20px] mb-12 justify-baseline">
          <SponsorBanner
            img="/images/FV1.png"
            sponsor="Enactus Canada"
            width={800}
            height={600}
          ></SponsorBanner>

          <SponsorBanner
            img="/images/hero.png"
            sponsor="SFU Beedie School of Business"
            width={1921}
            height={900}
          ></SponsorBanner>
        </div>

        <div className="flex flex-wrap gap-[20px] mb-[20px] mt-[32px]">
          {forwardVisionList.map((sponsor) => (
            <SponsorImgMed
              key={sponsor.sponsor}
              img={sponsor.img}
              sponsor={sponsor.sponsor}
              width={sponsor.width}
              height={sponsor.height}
            ></SponsorImgMed>
          ))}
        </div>
      </div>

      <div>
        <h1 className="mt-8 mb-8">Our Partners for Forward Vision</h1>

        <div className="flex flex-wrap gap-[20px] mb-[20px]">
          {forwardVisionList.map((sponsor) => (
            <SponsorImgSmall
              key={sponsor.sponsor}
              img={sponsor.img}
              sponsor={sponsor.sponsor}
              width={sponsor.width}
              height={sponsor.height}
            ></SponsorImgSmall>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4 mt-[64px] mb-[64px]">
        <h1>Interested in becoming a partner?</h1>
        <h3 className="text-primary-yellow">
          If you would like to partner with us, fill out the form below and one
          of our staff members will get back to you.
        </h3>
      </div>
    </div>
  );
}

export default page;
