import React from "react";
import Header from "../components/header";
import ImgBanner from "../components/imgbanner";
import Label from "../components/label";

function page() {
  const projects = [
    {
      name: "SKYES",
      description:
        "SKYES is an entrepreneurial education initiative that empowers underprivileged youth across South and Southeast Asia to become changemakers in their communities. Through experiential learning and mentorship, students gain the skills and confidence to transform their ideas into impact.",
      // cta: "google.ca",
      // linkedin: "google.ca",
      // instagram: "google.ca",
      image: "/images/SKYES-Banner.png",
    },
    {
      name: "Unify",
      description:
        "Unify is a digital platform that helps newcomers to Canada feel at home faster by combining trusted information, community connection, and personalized guidance in one place. Through practical lessons, an AI companion, and local events, Unify turns the challenges of settling in Canada into a clear, confident, and connected journey.",
      // cta: "google.ca",
      linkedin: "https://www.linkedin.com/company/unify-social/posts/?feedView=all",
      instagram: "https://www.instagram.com/unifysocial.ca/",
      image: "/images/Unify-Banner.png",
    },
    {
      name: "Alara",
      description:
        "Meet Alara, an eco-friendly bioplastic born from Earth’s waters, designed for Earth’s future. Alara is leveraging Earth’s natural resources to create a 100% biodegradable bioplastic to tackle the plastic pollution crisis, pushing the economy towards a more sustainable future.",
      // cta: "google.ca",
      // linkedin: "google.ca",
      // instagram: "google.ca",
      image: "/images/Alara-Banner.png",
    },
    {
      name: "Nourish",
      description:
        "Nourish is a student-led social enterprise that transforms cosmetically imperfect fruit from local grocery stores and distributors into high-protein, high-fiber, low-sugar gummies to promote functional and sustainable snacking.",
      // cta: "google.ca",
      // linkedin: "google.ca",
      instagram: "https://www.instagram.com/nourishcandy/",
      image: "/images/Nourish-Banner.png",
    },

    {
      name: "NextSpark",
      description:
        "NextSpark is a hands-on STEM education program that provides interactive kits and engaging workshops to help students learn science, technology and engineering through real-world applications. By combining fun, discovery-based learning with structured support, NextSpark empowers students to build STEM skills and confidence in an accessible and exciting way",
      // cta: "google.ca",
      // linkedin: "google.ca",
      // instagram: "google.ca",
      image: "/images/NextSpark-Banner.png",
    },

    {
      name: "Renovo",
      description:
        "Renovo is a not-for-profit that empowers Canadian veterans and Indigenous communities through multi-week business programs. Offering mentorship, hands-on start-up development, and seed funding opportunities, we renew purpose today, to reimagine tomorrow together",
      // cta: "google.ca",
      // linkedin: "google.ca",
      // instagram: "google.ca",
      image: "/images/Renovo-Banner.png",
    },
  ];

  const pastProjects = [
    {
      name: "Second Savour",
      description:
        "We are Second Savour, where purpose meets palate. As a student-led social enterprise, our mission is to rescue rejected produce surplus and transform it into nutritious, long-lasting food items. We're not just about sustenance; we're on a mission to raise awareness about sustainable food consumption, sparking a collective reevaluation of our consumption habits.",
      year: "2023–2025",
    },
    {
      name: "The Beekind Company",
      description:
        "The BeeKind Company is a movement dedicated to illuminating spaces while fostering environmental awareness. Founded by a passionate team of young entrepreneurs from SFU, The BeeKind Company is a social enterprise driven to repurpose waste and reshape public perceptions.",
      year: "2023–2025",
    },
    {
      name: "Aqua Analyzer",
      description:
        "The Aqua Analyzer tests water quality by measuring three parameters: total dissolved solids, pH, and temperature.",
      year: "2023–2025",
    },
    {
      name: "Axis Consulting",
      description:
        "Axis Consulting is a student-led pro-bono consultancy that helps businesses build their capabilities and empower non-for-profits to create a positive impact for their community. Originating from Enactus SFU, Axis Consulting seamlessly integrates strategy, data, insights, and expertise to drive value for their clients.",
      year: "2012–2019",
    },
    {
      name: "Catalyst",
      description:
        "An 8 week collaborative program with the Charles Chang Institute of Entrepreneurship to enable students across British Columbia to unleash their entrepreneurial mindset. The structure of the program includes an opening ceremony, two in-person workshops, fireside chat, and closing ceremony. Refreshments will be provided in each event to keep participants energized.",
      year: "2024–2025",
    },
    {
      name: "Bright Ideas",
      description:
        "Bright Ideas offers students the opportunity to develop their entrepreneurial skills in a low-stakes environment and gain hands-on experience in the business world. Our program aims to connect students with various backgrounds and interests to share their knowledge and experiences.",
      year: "2016–2023",
    },
    {
      name: "Banner Bags",
      description:
        "Many students are unaware of the amount of waste that we throw away, and this ultimately goes into the landfills. By educating high school students about environmental sustainability, they can make greener decisions and help their communities to become more sustainable for present and future generations. Banner Bags works to achieve this by developing an education curriculum targeted at high school students to highlight the management of waste through the upcycling of banners that students can constantly reuse.",
      year: "2016–2023",
    },
    {
      name: "Coast Cards",
      description:
        "In 2016, our project founder witnessed the overwhelming amount of coasters being thrown out every night by local restaurants. We created Coast Cards – a project within Enactus SFU that sells eco-friendly greeting cards made from upcycling used restaurant coasters.",
      year: "2014–2016",
    },
    {
      name: "Count On Me",
      description:
        "Count on Me strives to provide youth with assistance in financial literacy, financial independence, and employability skills. We partner with community organizations and high schools to provide workshops regarding 5 topics. Our project is lead by trained youth leaders and consists of five hands-on workshops which include: discussions, interactive activities, and PowerPoint presentations.",
      year: "2014–2016",
    },
    {
      name: "Changemaker Challenge",
      description:
        "The Changemaker Challenge (CMC), which is a two day event (on the third week of February) where students across faculties come together to create a project-based solution.",
      year: "2014–2016",
    },
    {
      name: "Media Minds",
      description:
        "About 80% of immigrant children under the age of 15 do not know how to speak English when they arrive in Canada. To tackle this issue, Media Minds was created in 2012 to help youth newcomers deepen their engagement in Canadian society while maintaining their cultural image through our digital literacy project.",
      year: "2014–2016",
    },
    {
      name: "ReFresh",
      description:
        "Refresh is a student-led social enterprise that collects and utilizes excess fruit produce from local grocers to create a variety of enjoyable culinary delights. We strive to provide an alternate future for visually imperfect produce in order to reduce food wastage, while making a measurable impact in our community.",
      year: "2014–2016",
    },
  ];

  return (
    <div className="flex flex-col gutter gap-[24px] md:gap-[48px] lg:gap-[64px]">
      <Header
        header="Projects"
        body="What we're currently working on."
      ></Header>

      <div className="flex flex-col gap-[36px] md:gap-[48px] mb-[24px] md:mb-[48px]">
        {projects.map((project) => (
          <div key={project.name}>
            <ImgBanner
              header={project.name}
              body={project.description}
              cta1={project.cta}
              cta2={project.cta}
              instagram={project.instagram}
              linkedin={project.linkedin}
              img={project.image}
            ></ImgBanner>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-[16px]">
        <h1 className="mb-[24px] md:mb-[48px]">Past Projects</h1>

        {pastProjects.map((project) => (
          <div key={project.name}>
            <Label
              header={project.name}
              subheader={project.year}
              body={project.description}
            ></Label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default page;
