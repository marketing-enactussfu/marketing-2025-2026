import React from "react";
import LabelRow from "../components/labelRow.js";
import SponsorImg from "../components/sponsorImg.js";
import SponsorBanner from "../components/sponsorBanner.js";

function page() {
  return (
    <div className="m-6">
      <div className="border-2 border-white text-white">page</div>
      <div className="text-white w-0.5">page page page</div>

      <LabelRow
        title="Banner Bags"
        year="2016-2023"
        body="Many students are unaware of the amount of waste that we throw away, and this ultimately goes into the landfills. By educating high school students about environmental sustainability, they can make greener decisions and help their communities to become more sustainable for present and future generations. Banner Bags works to achieve this by developing an education curriculum targeted at high school students to highlight the management of waste through the upcycling of banners that students can constantly reuse."
      ></LabelRow>

      <div className="h-10"></div>

      <SponsorImg
        img="/images/FV1.png"
        sponsor="Sponsor Name"
        width={800}
        height={600}
      ></SponsorImg>

      <SponsorBanner
        img="/images/FV1.png"
        sponsor="Enactus Canada"
        width={800}
        height={600}
      ></SponsorBanner>
    </div>
  );
}

export default page;
