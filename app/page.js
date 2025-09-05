import React from "react";
import Image from "next/image";
import { MdAdd, MdBuild, MdConstruction } from "react-icons/md";
import Button from "./components/button";

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

  return (
    <div className="flex flex-col gap-[128px]">
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
        <div className="absolute inset-0 flex items-center justify-center">
          <h1
            className="text-white text-center"
            style={{
              textShadow:
                "0 0 20px #FFD700, 0 0 40px #FFD700, 0 0 60px #FFD700",
            }}
          >
            FUELED BY
            <br />
            INNOVATIONING
          </h1>
        </div>
      </section>

      <section className="section-standard">
        <div className="flex flex-col gap-[12px]">
          <h2>
            {" "}
            We build projects that create a positive impact on our community.
          </h2>

          <div className="flex flex-col gap-[8px] mt-[12px]">
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
        <div className="flex flex-col gap-[24px] w-fill ">
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
        </div>
      </section>
    </div>
  );
}

export default page;
