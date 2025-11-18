"use client";
import React from "react";
import Header from "../components/header";
import ImgHero from "../components/imgHero";
import Image from "next/image";
import YearLabel from "../components/yearLabel";

function page() {
  const achievements = [
    {
      header: "2024–2025",
      subheader1: "Nationals",
      body1: "Semi-finalist (top 20 out of 80+ schools in Canada)",
      subheader2: "Regionals",
      body2:
        "1st Place (Entrepreneurship), 2nd Place (Youth Empowerment), 2nd Place (Environmental Sustainability), 3rd Place (Innovation and Impact)",
    },
    {
      header: "2023–2024",
      subheader1: "Nationals",
      body1:
        "Semifinalist (top 20 out of 80+ schools in Canada), 2nd Place (Innovation and Impact)",
      subheader2: "Regionals",
      body2:
        "1st Place (Innovation and Impact), 2nd Place (Environmental Sustainability), 2nd Place (Entrepreneurship)",
    },
    {
      header: "2022–2023",
      subheader1: "Regionals",
      body1:
        "3rd Place (Entrepreneurship), 3rd Place (Climate Action)",
      subheader2: "",
      body2: "",
    },
    // {
    //   header: "2021–2022",
    //   subheader1: "Regionals",
    //   body1:
    //     "1st Place (Scotiabank Climate Action Project Idea Pitch), 3rd Place (TD Entrepreneurship Challenge)",
    //   subheader2: "",
    //   body2: "",
    // },
    // {
    //   header: "2020–2021",
    //   subheader1: "Regionals",
    //   body1:
    //     "1st Place (Scotiabank Youth Empowerment), 3rd Place (Western Bank Financial Education Challenge)",
    //   subheader2: "",
    //   body2: "",
    // },
    // {
    //   header: "2018–2019",
    //   subheader1: "Nationals",
    //   body1: "Semi-Finalist (Nationals Exposition)",
    //   subheader2: "Regionals",
    //   body2: "1st Place (Scotiabank Youth Empowerment)",
    // },
    // {
    //   header: "2017–2018",
    //   subheader1: "Nationals",
    //   body1:
    //     "1st Place (Capital One Financial Education Challenge), Semi-Finalist (Nationals Exposition)",
    //   subheader2: "Regionals",
    //   body2:
    //     "1st Place (EcoLiving Challenge), 1st Place (Scotiabank Youth Empowerment Challenge), 1st Place (TD Entrepreneurship Challenge)",
    // },
  ];

  return (
    <div className="flex flex-col gutter gap-[80px] md:gap-[124px]">
      <div className="flex flex-col gap-[0px]">
        <div className="flex flex-col gap-[24px]">
          <h1> Competition </h1>

          <div className="flex flex-col gap-[12px] mb-[24px] md:mb-[48px]">
            <h3>
              {" "}
              This year, Simon Fraser University had their top performance in
              the last couple of years, placing in all four categories and
              winning 1st in TD Entrepreneurship.{" "}
            </h3>

            <h5 className="text-primary-yellow"> Awards </h5>
          </div>
        </div>

        <Image
          src="/images/competitionBanner.png"
          alt="A group picture of Enactus SFU members"
          width={1920}
          height={1080}
          className="w-full h-fit"
          priority
        />
      </div>

      <section className="flex flex-col gap-[48px] lg:gap-[64px] w-[100%]">
        <div className="flex flex-col gap-[24px]">
          <div className="flex flex-col gap-[12px]">
            <h5 className="text-primary-yellow"> 2025 </h5>
            <h1> Nationals </h1>
          </div>
          <h3>
            {" "}
            This year, Simon Fraser University placed semi-finals, earning Top
            20 out of 80+ schools in Canada.{" "}
          </h3>
        </div>

        <div className="flex lg:flex-row flex-col w-[100%] gap-[16px]">
          <Image
            src="/images/nat1.png"
            alt="Hero Image"
            width={1920}
            height={1080}
            className="w-[100%] lg:w-[50%] h-auto"
            priority
          />
          <Image
            src="/images/nat3.png"
            alt="Hero Image"
            width={1920}
            height={1080}
            className="w-[100%] lg:w-[50%] h-auto"
            priority
          />
        </div>

        <div className="flex flex-col gap-[16px]">
          <h2 className="text-primary-red"> Semifinalist </h2>
          <div className="flex flex-col gap-[2px]">
            <h3>
              Presenters: Valeria Lozdada, Arianna Tham, Michael Gudz, Rachael
              Varghese
            </h3>
            <h3>Designer: Cony Lee</h3>
            <h3> Coaches: Sam Thiara, Vinay Aery, Justin Brower</h3>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-[48px] lg:gap-[64px] w-[100%]">
        <div className="flex flex-col gap-[24px]">
          <div className="flex flex-col gap-[12px]">
            <h5 className="text-primary-yellow"> 2025 </h5>
            <h1> Regionals </h1>
          </div>
          <h3>
            {" "}
            This year, Simon Fraser University had their top performance in the
            last couple of years, placing in all four categories and winning 1st
            in Desjardins Youth Empowerment Challenge.
          </h3>
        </div>

        <div className="flex flex-col gap-[48px]">
          <div className="flex flex-col lg:flex-row w-[100%] gap-[32px]">
            {/* 1st place */}
            <div className="flex flex-col gap-[32px] w-[100%]">
              <Image
                src="/images/entre.png"
                alt="Hero Image"
                width={1920}
                height={1080}
                className="w-[100%] h-auto"
                priority
              />
              <h2 className="text-primary-red">
                {" "}
                1st Place - Entrepreneurship Challenge{" "}
              </h2>
              <div className="flex flex-col gap-[2px]">
                <h3>Presenters: Naia Wong, Wilson Liang, Nico Tan</h3>
                <h3>Designer: Faith Leung</h3>
                <h3>Coaches: Brandon Xu, Cameron Miranda, Colin Jeon</h3>
              </div>
            </div>
            {/* 2nd place */}
            <div className="flex flex-col gap-[32px] w-[100%]">
              <Image
                src="/images/ye1.png"
                alt="Hero Image"
                width={1920}
                height={1080}
                className="w-[100%] h-auto"
                priority
              />
              <h2 className="text-primary-red">
                {" "}
                2nd Place - Youth Empowerment Challenge{" "}
              </h2>
              <div className="flex flex-col gap-[2px]">
                <h3>Presenters: Marianne Li, Olivia Cheng</h3>
                <h3>Designer: Thy Vu</h3>
                <h3>Coaches: Daniel Furlot & Tim MacDougall</h3>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-[32px] w-[100%]">
            <div className="flex flex-col gap-[32px] w-[100%]">
              <Image
                src="/images/inno.png"
                alt="Hero Image"
                width={1920}
                height={1080}
                className="w-[100%] h-auto"
                priority
              />
              <h2 className="text-primary-red">
                {" "}
                3rd Place - Innovation and Impact{" "}
              </h2>
              <div className="flex flex-col gap-[2px]">
                <h3>Presenters: Siya Madaan, Anthony Perera</h3>
                <h3>Designer: Joseph Lee</h3>
                <h3>Coaches: Sandra Chen & Devan Parmar</h3>
              </div>
            </div>
            <div className="flex flex-col gap-[32px] w-[100%]">
              <Image
                src="/images/env.png"
                alt="Hero Image"
                width={1920}
                height={1080}
                className="w-[100%] h-auto"
                priority
              />
              <h2 className="text-primary-red">
                {" "}
                2nd Place - Environmental Sustainability{" "}
              </h2>
              <div className="flex flex-col gap-[2px]">
                <h3>Presenters: Amber Holliday, Vanessa Kam</h3>
                <h3>Designer: Van Mai</h3>
                <h3>Coaches: Harneet Gill & Sophia Nguyen</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-[32px] md:gap-[48px] lg:gap-[64px]">
        <h3 className="text-primary-yellow"> Previous Years </h3>
        <div className="flex flex-col gap-[16px]">
          {achievements.map((project) => (
            <YearLabel
              key={project.body1}
              header={project.header}
              subheader1={project.subheader1}
              body1={project.body1}
              subheader2={project.subheader2}
              body2={project.body2}
            ></YearLabel>
          ))}
        </div>
      </section>
    </div>
  );
}

export default page;
