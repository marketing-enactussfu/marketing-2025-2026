import React from "react";
import Modal from "../components/modal.js";
import Header from "../components/header.js";
import Label from "../components/label.js";
import IconLabel from "../components/iconLabel.js";
import BoltIcon from "@mui/icons-material/Bolt";
import Imglabel from "../components/imglabel.js";

function page() {
  return (
    <div className="flex flex-col gap-4">
      <Header
        header="Our Events"
        body="Discover our educational workshops hosted by Enactus SFU, connect with like-minded individuals, and learn about sustainable social entrepreneurship."
      />

      <h1>H1, Hello</h1>
      <h2 className="text-red-500">H2, Hello</h2>
      <h3>H3, Hello</h3>
      <h4>H4, Hello</h4>
      <h5>H5, Hello</h5>
      <h6>H6, Hello</h6>
      <p>This is a paragraph of text.</p>

      <Label
        header="Second Savour"
        subheader="2023-2025"
        body="We are Second Savour, where purpose meets palate. As a student-led social enterprise, our mission is to rescue rejected produce surplus and transform it into nutritious, long-lasting food items. We're not just about sustenance; we're on a mission to raise awareness about sustainable food consumption, sparking a collective reevaluation of our consumption habits."
      ></Label>
      <IconLabel
        icon={<BoltIcon fontSize="large" color="#DC5939" />}
        header="Pitching Streams"
        subheader="asdjfisajkf"
        body="Teams will develop a small enterprise focused on the theme of 'Climate Action'. On the event day, teams will pitch their ideas to a panel of investors to receive fictitious funding for the 'Scale-Up Session'."
      ></IconLabel>

      <div className=" max-w-[50vw]">
        <Imglabel
          header="Forward Vision"
          body="Showcase your entrepreneurial spirit and skills in our very own competition! Competitors will be tested on their entrepreneurship, social enterprise, and the practical application of their idea that positively impacts society in a pitch style."
          img="/images/FV1.png"
          cta1="Learn More"
          cta2="Learn More"
          instagram=""
          linkedin=""
        ></Imglabel>
      </div>
    </div>
  );
}

export default page;
