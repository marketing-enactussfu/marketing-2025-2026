import React from "react";
import Image from "next/image";
import { MdGroups, MdInterests, MdConstruction } from "react-icons/md";

import Button from "./components/button";
import CheckLabel from "./components/checkLabel";
import ProjectCard from "./components/projectCard";
import ImgCarousel from "./components/imgCarousel";

function page() {
  const items = [
    {
      label: "Innovation",
      body: "We bring innovation to all of our initiatives and push our projects past their limits. We strive to be better than we were yesterday.",
      icons: "MdConstruction",
    },
    {
      label: "Passion",
      body: "We foster a work hard play hard culture, bringing passion and joy to our work. We bring energy, purpose, and heart to everything we do.",
      icons: "MdGroups",
    },
    {
      label: "Excellence",
      body: "We hold ourselves to the highest standards in every project, always striving to exceed expectations. We pursue continuous growth and outstanding results.",
      icons: "MdInterests",
    },
  ];

  const stats = [
    { header: "15", body: "Community Initiatives" },
    { header: "1200", body: "Members Involved" },
    { header: "8,600+", body: "Lives Impacted" },
    { header: "115,000+", body: "Volunteer Hours" },
    // { header: "15,000+", body: "Projects throughout 2012-2025." },
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
          className="w-full h-auto saturate-85"
          priority
        />

        {/* Absolutely positioned centered text with golden glow effect */}
        <div className="absolute inset-0 flex flex-col gap-[16px] lg:gap-[27px] items-center justify-center">
          <h1 className="hero-text text-white text-center golden-glow">
            FUELED BY <br /> INNOVATION
          </h1>

          <h1 className="hero-text text-white text-center golden-glow">
            LED WITH <br /> PASSION
          </h1>

          <h1 className="hero-text text-white text-center golden-glow">
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

          <Button size="large" style="primary" cta="/about">
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
                className="flex flex-col gap-6 md:flex-row md:gap-12 bg-primary-gray px-[24px] py-[24px] w-fill h-fit rounded-[16px]"
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
                  <h3> {item.body}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="padding">
        <div className="flex flex-row md:flex-row flex-wrap grow min-[83rem]:flex-nowrap mb-[48px] gap-[20px]">
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
        <ImgCarousel
          Carousel=
          {
            [{ name: "2024", img: "/images/Hero-2024.png" },
            { name: "2023", img: "/images/Hero-2023.png" },
            { name: "2022", img: "/images/Hero-2022.png" }]
          }
        />
      </section>
    </div>
  );
}

export default page;
