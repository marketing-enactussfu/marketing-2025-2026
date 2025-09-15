import React from "react";
import Image from "next/image";
import { MdGroups, MdInterests, MdConstruction } from "react-icons/md";

import Button from "./components/button";
import Iconlabel from "./components/iconLabel";
import CheckLabel from "./components/checkLabel";
import { Check } from "@mui/icons-material";
import ProjectCard from "./components/projectCard";

function page() {
  const items = [
    {
      label: "Development",
      body: "Allow students to build sustainable projects and further their impact by adapting to changing trends.",
      icons: "MdConstruction",
    },
    {
      label: "Member Engagement",
      body: "Build a welcoming, engaging, and inclusive community for all members.",
      icons: "MdGroups",
    },
    {
      label: "Collective Growth",
      body: "Foster unity and create opportunities for members to make an impact on the community and the club.",
      icons: "MdInterests",
    },
  ];

  const stats = [
    { header: "15+", body: "Projects throughout 2012-2025." },
    { header: "20+", body: "Projects throughout 2012-2025." },
    { header: "100+", body: "Projects throughout 2012-2025." },
    { header: "187,000+", body: "Projects throughout 2012-2025." },
    { header: "15,000+", body: "Projects throughout 2012-2025." },
  ];

  const projectsTop = [
    {
      img: "/images/SkyesCard.png",
      header: "SKYES",
      body: "SKYES is an entrepreneurial education initiative that aims to educate underprivileged youth in South and South-East Asia with entrepreneurial education to to help their local communities.",
    },
    {
      img: "/images/UnifyCard.png",
      header: "Unify",
      body: "Through access to essential resources, educational tools, and a supportive community, Unify aims to support immigrants, refugees, and international students.",
    },
  ];

  const projectsBottom = [
    {
      img: "/images/AlaraCard.png",
      header: "Alara",
      body: "Alara provides plastic alternatives that promote sustainability and a circular economy by leveraging seaweed to create a 100% compostable bioplastic.",
    },
    {
      img: "/images/NourishCard.png",
      header: "Nourish",
      body: "Nourish makes plant-based protein gummies from up-cycled fruit. Packed with protein and fiber, low in sugar, they're a convenient, feel-good snack thats fuels active lifestyles and fights food waste.",
    },
  ];

  return (
    <div className="flex flex-col gap-[48px]">
      <section className="flex justify-center relative">
        <Image
          src="/images/hero.png"
          alt="Hero Image"
          width={1920}
          height={1080}
          className="w-full h-auto"
          priority
        />

        {/* Absolutely positioned centered text with golden glow effect */}
        <div className="absolute inset-0 flex flex-col gap-[27px] items-center justify-center">
          <h1 className="text-white text-center golden-glow">
            FUELED BY <br /> INNOVATION
          </h1>

          <h1 className="text-white text-center golden-glow">
            LED WITH <br /> PASSION
          </h1>

          <h1 className="text-white text-center golden-glow">
            DEFINED BY <br /> EXCELLENCE
          </h1>
        </div>
      </section>

      <section className="section-standard mb-[48px]">
        <div className="flex flex-col gap-[12px]">
          <h2>
            {" "}
            We build projects that create a positive impact on our community.
          </h2>

          <div className="flex flex-col gap-[8px] mt-[12px] mb-[24px]">
            <h6 className="text-primary-yellow">But what does that mean?</h6>
            <h3>
              {" "}
              What others see as challenges, we see as opportunities to
              innovate. With an active member base across multiple
              concentrations and faculties, Enactus SFU continues to expand
              sustainable projects yearly, empowering students to develop
              entrepreneurial skills and become future leaders.{" "}
            </h3>
          </div>

          <Button size="large" style="primary">
            Our Story
          </Button>
        </div>
      </section>

      <section className="section-standard">
        <div className="flex flex-col gap-[20px] w-fill ">
          {items.map((item) => {
            const IconComponent = item.icons;

            return (
              <div
                className="flex flex-row gap-12 bg-primary-gray px-[24px] py-[24px] w-fill h-fit rounded-lg"
                key={item.label}
              >
                {IconComponent === "MdConstruction" ? (
                  <MdConstruction
                    size={50}
                    color={"var(--color-primary-red)"}
                  />
                ) : (
                  ""
                )}
                {IconComponent === "MdGroups" ? (
                  <MdGroups size={50} color={"var(--color-primary-red)"} />
                ) : (
                  ""
                )}
                {IconComponent === "MdInterests" ? (
                  <MdInterests size={50} color={"var(--color-primary-red)"} />
                ) : (
                  ""
                )}

                <div className="flex flex-col gap-2 text-white">
                  <h2>{item.label} </h2>
                  <p> {item.body}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="section-standard">
        <div className="flex flex-col flex-wrap mb-[48px] md:flex-row lg:flex-row gap-[20px]">
          {stats.map((stat) => (
            <CheckLabel
              header={stat.header}
              body={stat.body}
              key={stat.header}
            ></CheckLabel>
          ))}
        </div>
      </section>

      <section className="max-[74rem]:section-standard flex flex-col mb-[48px] gap-[20px]">
        <div className="flex flex-col min-[74rem]:flex-row gap-[20px]">
          {projectsTop.map((project) => (
            <ProjectCard
              img={project.img}
              header={project.header}
              body={project.body}
              key={project.header}
            ></ProjectCard>
          ))}
        </div>
        <div className="flex flex-col min-[74rem]:flex-row gap-[20px]">
          {projectsBottom.map((project) => (
            <ProjectCard
              img={project.img}
              header={project.header}
              body={project.body}
              key={project.header}
            ></ProjectCard>
          ))}
        </div>
      </section>

      <section>
        <Image
          src="/images/CompetitionCheer.png"
          alt="Enact"
          width={1200}
          height={1200}
          className="w-[100%] h-auto"
        />
      </section>
    </div>
  );
}

export default page;
