import React from "react";
import Image from "next/image";
import { MdBuild, MdFavourite, MdConstruction } from "react-icons/md";

function page() {
  const items = [
    {
      label: "Mission",
      body: "A community of changemakers using entrepreneurship to address social, economic, and environmental needs. We aim to create measurable impact on others' lives.",
      icons: "MdBuild",
    },
    {
      label: "Vision",
      body: "To be student leaders who inspire positive change through innovation and social entrepreneurship to create a sustainable world.",
      icons: "MdFavourite",
    },
  ];

  const goals = [];

  return (
    <div>
      <section className="flex flex-col gap-[16px] md:gap-[48px] mb-[16px] md:mb-[48px]">
        <div className="section-standard flex flex-col gap-[16px]">
          <h1>
            Welcome to the journey of Enactus SFU, where innovation, passion,
            and excellence have been our guiding principles for 32 years.
            Enactus is a global organization that uses entrepreneurial action as
            a catalyst for progress, taking the concepts of social
            entrepreneurship and the triple bottom-line to heart.
          </h1>

          <h2 className="text-primary-yellow">About Enactus SFU</h2>
        </div>

        <div className="pl-[100px] pr-[100px] md:p-0">
          <Image
            src="/images/AboutCrowd.png"
            alt="A crowd cheering"
            width={1000}
            height={1000}
            className="object-cover min-h-[270px] h-full w-auto md:w-full md:h-auto"
          ></Image>
        </div>
      </section>

      <section className="section-standard mb-[16px] md:mb-[48px]">
        <div className="flex flex-col gap-6 md:gap-[16px] bg-primary-gray px-[24px] py-[24px] w-fill h-fit rounded-[16px]">
          <MdBuild size={50} color={"var(--color-primary-red)"} />

          <div className="flex flex-col gap-[16px] text-white">
            <h2>Enactus SFU&apos;s Impact</h2>
            <div className="flex flex-col gap-[16px]">
              <p>
                At Enactus SFU, we tackle community issues by turning challenges
                into opportunities to innovate. We empower students to develop
                skills, take initiative, and become the future leaders our
                communities need. Over the past 8 years, our team has dedicated
                over 115,000 volunteer hours, impacting the lives of 8,600+
                individuals.
              </p>
              <p>
                As one of the largest organizations at the Beedie School of
                Business, Enactus SFU also has a strong legacy of competitive
                excellence - consistently placing at Enactus Canada’s Regional
                and National Expositions, including multiple podium finishes in
                recent years.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-standard">
        <div className="flex flex-col gap-[16px] mb-[24px] md:mb-[48px] mt-auto">
          <h1 className="text-primary-yellow">Our Target SDG Goals</h1>
          <h2>
            Enactus SFU is expecting to execute projects for Sustainable
            Development Goals in the 2024/2025 academic year.
          </h2>
        </div>

        <div></div>
      </section>

      {/* <section className="section-standard">
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
                {IconComponent === "MdBuild" ? (
                  <MdBuild size={50} color={"var(--color-primary-red)"} />
                ) : (
                  ""
                )}
                {IconComponent === "MdFavourite" ? (
                  <MdFavourite size={50} color={"var(--color-primary-red)"} />
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
      </section> */}
    </div>
  );
}

export default page;
