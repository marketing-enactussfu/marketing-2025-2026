import React from "react";
import Modal from "../components/modal.js";
import Header from "../components/header.js";
import Label from "../components/label.js";
import IconLabel from "../components/iconLabel.js";
import BoltIcon from "@mui/icons-material/Bolt";
import Imglabel from "../components/imglabel.js";
import Leadership from "../components/leadership.js";

function page() {
  const leadershipList = [
    {
      name: "Cameron Miranda",
      position: "Co - President",
      img: "/images/FV1.png",
    },
    {
      name: "Lauren Riestra",
      position: "Co - President",
      img: "/images/FV1.png",
    },
    {
      name: "Amber Holliday",
      position: "VP of Internal",
      img: "/images/FV1.png",
    },
    { name: "Naia Wong", position: "VP of Strategy", img: "/images/FV1.png" },
    { name: "Vinay Aery", position: "VP of Strategy", img: "/images/FV1.png" },
    { name: "Peehu Gupta", position: "VP of Finance", img: "/images/FV1.png" },
    {
      name: "Steven Learmonth",
      position: "VP of Events",
      img: "/images/FV1.png",
    },
    { name: "Olivia Cheng", position: "VP of Events", img: "/images/FV1.png" },
    { name: "Kevin Huang", position: "VP of External", img: "/images/FV1.png" },
    { name: "Marianne Li", position: "VP of External", img: "/images/FV1.png" },
    {
      name: "Stephanie Ma",
      position: "VP of Marketing",
      img: "/images/FV1.png",
    },
    { name: "Thy Vu", position: "VP of Marketing", img: "/images/FV1.png" },
    {
      name: "Faith Leung",
      position: "Director of Design",
      img: "/images/FV1.png",
    },
    {
      name: "Cony Lee",
      position: "Director of Design",
      img: "/images/FV1.png",
    },
    {
      name: "Joseph Lee",
      position: "Director of Design",
      img: "/images/FV1.png",
    },
    {
      name: "Chloe Lu",
      position: "Director of Marketing Strategy",
      img: "/images/FV1.png",
    },
    {
      name: "Juliana Manalo",
      position: "Director of Media Production",
      img: "/images/FV1.png",
    },
    {
      name: "Caleb Wu",
      position: "Director of Web Development",
      img: "/images/FV1.png",
    },

    // Project Operations
    { name: "Wilson Liang", position: "PM of sKYES", img: "/images/FV1.png" },
    {
      name: "Francesca Yalung",
      position: "PM of sKYES",
      img: "/images/FV1.png",
    },
    {
      name: "Cedric Tanafranca",
      position: "PM of Unity",
      img: "/images/FV1.png",
    },
    { name: "Savar Gupta", position: "PM of Unity", img: "/images/FV1.png" },
    { name: "Ruchi Sharma", position: "PM of Alara", img: "/images/FV1.png" },
    {
      name: "Jaideep Kochhar",
      position: "PM of Alara",
      img: "/images/FV1.png",
    },
    {
      name: "Anthony Perera",
      position: "PM of Nourish",
      img: "/images/FV1.png",
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      {/* 
            <Header
                header="Our Events"
                body="Discover our educational workshops hosted by Enactus SFU, connect with like-minded individuals, and learn about sustainable social entrepreneurship."
            />

            <h1>H1, Hello</h1>
            <h2 className='text-red-500'>H2, Hello</h2>
            <h3>H3, Hello</h3>
            <h4>H4, Hello</h4>
            <h5>H5, Hello</h5>
            <h6>H6, Hello</h6>
            <p>This is a paragraph of text.</p>

            <Label
                header="Second Savour"
                subheader="2023-2025"
                body="We are Second Savour, where purpose meets palate. As a student-led social enterprise, our mission is to rescue rejected produce surplus and transform it into nutritious, long-lasting food items. We're not just about sustenance; we're on a mission to raise awareness about sustainable food consumption, sparking a collective reevaluation of our consumption habits.">
            </Label>
            <IconLabel
                icon={<BoltIcon fontSize="large" color="#DC5939" />}
                header="Pitching Streams"
                subheader="asdjfisajkf"
                body="Teams will develop a small enterprise focused on the theme of 'Climate Action'. On the event day, teams will pitch their ideas to a panel of investors to receive fictitious funding for the 'Scale-Up Session'.">
            </IconLabel>

            <div className=' max-w-[50vw]'>
                <Imglabel
                    header="Forward Vision"
                    body="Showcase your entrepreneurial spirit and skills in our very own competition! Competitors will be tested on their entrepreneurship, social enterprise, and the practical application of their idea that positively impacts society in a pitch style."
                    img="/images/FV1.png"
                    cta1="Learn More"
                    cta2="Learn More"
                    instagram=""
                    linkedin="">
                </Imglabel>
            </div> */}

      <div className=" flex flex-col md:flex-col lg:flex-row gap-[4px]">
        {leadershipList.map((person) => (
          <Leadership
            name={person.name}
            position={person.position}
            img={person.img}
            key={person.name}
          ></Leadership>
        ))}
      </div>
    </div>
  );
}

export default page;
