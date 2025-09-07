import React from "react";
import SponsorImgMed from "../components/sponsorImgMed.js";
import SponsorImgSmall from "../components/sponsorImgSmall.js";
import SponsorBanner from "../components/sponsorBanner.js";
import Header from "../components/header.js";
import Footer from "../components/footer.js";
import Button from "../components/button.js";

function page() {
  const partnerList = [
    { img: " ", sponsor: "The Old Spaghetti Factory", width: " ", height: " " },
    { img: " ", sponsor: "Steve's Poke Bar", width: " ", height: " " },
    { img: " ", sponsor: "The Hive", width: " ", height: " " },
    { img: " ", sponsor: "Oxygen Yoga & Fitness", width: " ", height: " " },
    { img: " ", sponsor: "Popeye's Supplements", width: " ", height: " " },
    { img: " ", sponsor: "Red Bull", width: " ", height: " " },
    { img: " ", sponsor: " ", width: " ", height: " " },
    { img: " ", sponsor: "Vancouver Mysteries", width: " ", height: " " },
    { img: " ", sponsor: " ", width: " ", height: " " },
    { img: " ", sponsor: " ", width: " ", height: " " },
  ];

  const forwardVisionList = [
    {
      img: "/images/FV1.png",
      sponsor: "Test",
      width: "776",
      height: "662",
    },
  ];

  return (
    <div>
      <div className="section-standard">
        <div className="mt-12 mb-12">
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

        <div className="mt-12">
          <SponsorImgMed
            img="/images/FV1.png"
            sponsor="Sponsor Name"
            width={800}
            height={600}
          ></SponsorImgMed>
        </div>

        <h1>Our Partners for Forward Vision</h1>

        <div className="flex flex-wrap gap-[20px]">
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

      <Footer />
    </div>
  );
}

export default page;
