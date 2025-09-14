import React from "react";
import Image from "next/image";
import { MdAdd, MdBuild, MdConstruction } from "react-icons/md";

import Button from "./components/button";
import Iconlabel from "./components/iconLabel";
import CheckLabel from "./components/checkLabel";
import { Check } from "@mui/icons-material";

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
      icons: "MdConstruction",
    },
    {
      label: "Collective Growth",
      body: "Foster unity and create opportunities for members to make an impact on the community and the club.",
      icons: "MdConstruction",
    },
  ];

  const stats = [
    { header: "15+", body: "Projects throughout 2012-2025." },
    { header: "20+", body: "Projects throughout 2012-2025." },
    { header: "100+", body: "Projects throughout 2012-2025." },
    { header: "187,000+", body: "Projects throughout 2012-2025." },
    { header: "15,000+", body: "Projects throughout 2012-2025." },
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
        {/* <div className="flex flex-col gap-[24px] w-fill ">
          {items.map((item) => {
            const IconComponent = item.icons;

            return (
              <div
                className="flex flex-row gap-[24px] bg-primary-gray px-[24px] py-[24px] w-fill h-fit rounded-lg"
                key={item.label}
              >
                <IconComponent className="text-xl" />
                <div className="flex flex-col gap-2 text-white">
                  <h4>{item.label} </h4>
                  <p> {item.body}</p>
                </div>
              </div>
            );
          })}
        </div> */}
      </section>

      <section className="section-standard">
        <div className="flex flex-col flex-wrap mb-[48px] md:flex-row lg:flex-row gap-[24px] w-fill ">
          {stats.map((stat) => (
            <CheckLabel
              header={stat.header}
              body={stat.body}
              key={stat.header}
            ></CheckLabel>
          ))}
        </div>
      </section>
    </div>
  );
}

export default page;
