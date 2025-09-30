import React from "react";
import Image from "next/image";
import Button from "../components/button";

function imgHero({ img, header, subheader, cta1, cta2 }) {
  return (
    <div>
      <section className="flex justify-center relative lg:h-fit h-[40vh]">
        <Image
          src={img}
          alt={img}
          width={1920}
          height={1080}
          className="w-full h-fit"
          priority
        />

        {/* Absolutely positioned centered text with golden glow effect */}
        <div className="absolute inset-0 flex items-center flex-col justify-center p-[48px] gap-[24px] h-full">
          <h1 className="w-full text-left">{header}</h1>
          <h2 className="text-primary-yellow text-left w-full">{subheader}</h2>
          {cta2 == null ? (
            <div className="flex flex-row gap-[24px] justify-center">
              <Button size="large" style="primary">
                {cta1}
              </Button>
            </div>
          ) : (
            <div className="flex flex-row gap-[24px] w-full justify-start">
              <Button size="large" style="primary">
                {cta1}
              </Button>
              <Button size="large" style="primary">
                {cta2}
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default imgHero;
