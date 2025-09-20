import React from "react";
import SponsorImgMed from "../components/sponsorImgMed.js";
import SponsorImgSmall from "../components/sponsorImgSmall.js";
import SponsorBanner from "../components/sponsorBanner.js";
import Button from "../components/button.js";
import FormField from "../components/formField.js";

function page() {
  const partnerList = [
    {
      img: "/images/Redbull.png",
      sponsor: "RedBull",
      width: "696",
      height: "696",
    },
    {
      img: "/images/idance.jpg",
      sponsor: "iDance",
      width: "512",
      height: "512",
    },
    {
      img: "/images/ipop.jpg",
      sponsor: "iPop",
      width: "857",
      height: "398",
    },
    {
      img: "/images/ModoYoga.jpg",
      sponsor: "Modo Yoga",
      width: "1600",
      height: "345",
    },
    {
      img: "/images/RumbleBoxing.jpg",
      sponsor: "Rumble Boxing",
      width: "300",
      height: "300",
    },
    {
      img: "/images/SkoahFacialShop.jpg",
      sponsor: "Skoah.",
      width: "1084",
      height: "834",
    },
    {
      img: "/images/VCClogo.avif",
      sponsor: "Varshney Capital Corp",
      width: "160",
      height: "116",
    },
    {
      img: "/images/VELLUMWELLNESS.jpg",
      sponsor: "Vellum Wellness",
      width: "333",
      height: "113",
    },
    {
      img: "/images/VancouverWaterAdventures.jpg",
      sponsor: "Vancouver Water Adventures",
      width: "550",
      height: "550",
    },
  ];

  const forwardVisionList = [
    {
      img: "/images/Redbull.png",
      sponsor: "RedBull",
      width: "696",
      height: "696",
    },
    {
      img: "/images/Popeyes.png",
      sponsor: "Popeye's Supplements",
      width: "540",
      height: "539",
    },
    {
      img: "/images/OldSpaghetti.png",
      sponsor: "The Old Spaghetti Factory",
      width: "546",
      height: "545",
    },
    {
      img: "/images/PandorasLocks.png",
      sponsor: "Pandora's Locks",
      width: "213",
      height: "173",
    },
    {
      img: "/images/VMMLogo.png",
      sponsor: "Vancouver Maritime Museum",
      width: "546",
      height: "545",
    },
    {
      img: "/images/IntelligentChange.png",
      sponsor: "Intelligent Change",
      width: "540",
      height: "540",
    },
    { img: "/images/Exit.png", sponsor: "Exit", width: "540", height: "540" },
    {
      img: "/images/THLogo.png",
      sponsor: "TH",
      width: "540",
      height: "540",
    },
    {
      img: "/images/PromoSapien.png",
      sponsor: "Promo Sapien",
      width: "540",
      height: "540",
    },
    {
      img: "/images/Freesia.png",
      sponsor: "Freesia Soap Company",
      width: "540",
      height: "540",
    },
    {
      img: "/images/BaaadAnnas.png",
      sponsor: "Baaad Anna's",
      width: "540",
      height: "540",
    },
    {
      img: "/images/NordicYarn.png",
      sponsor: "Nordic Yarn",
      width: "540",
      height: "540",
    },
    { img: "/images/WCSLogo.png", sponsor: "WCS", width: "776", height: "662" },
    {
      img: "/images/ULogo.png",
      sponsor: "U",
      width: "776",
      height: "662",
    },
    {
      img: "/images/WesternSkyBooks.png",
      sponsor: "Western Sky Books",
      width: "776",
      height: "662",
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

        <div className="flex flex-col md:flex-row gap-[20px] mb-12 justify-baseline">
          <SponsorBanner
            img="/images/EnactusLogo.png"
            sponsor="Enactus Canada"
            width={457}
            height={200}
          ></SponsorBanner>

          <SponsorBanner
            img="/images/BeedieLogo.png"
            sponsor="SFU Beedie School of Business"
            width={798}
            height={150}
          ></SponsorBanner>
        </div>

        <div className="flex flex-wrap justify-center gap-[16px] md:gap-[20px] mb-[20px] mt-[32px]">
          {partnerList.map((sponsor) => (
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

        <div className="flex flex-wrap justify-center gap-[16px] md:gap-[20px] mb-[20px]">
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

      <div className="flex flex-col gap-4 mb-4">
        <div className="flex gap-4 sm:flex-col md:flex-col lg:grow lg:flex-row">
          <FormField field="First Name"></FormField>
          <FormField field="Last Name"></FormField>
        </div>
        <FormField field="Phone"></FormField>
        <FormField field="Email"></FormField>
        <FormField field="Message"></FormField>
      </div>
      <Button size="large" variant="primary" className="mb-12">
        Submit
      </Button>
    </div>
  );
}

export default page;
