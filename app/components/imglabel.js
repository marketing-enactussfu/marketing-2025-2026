import React from "react";
import Button from "../components/button";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Image from "next/image";

function imglabel({
  header,
  body,
  cta1,
  cta1link,
  cta2,
  cta2link,
  instagram,
  linkedin,
img,
}) {
  return (
    <div className="bg-primary-gray flex flex-col gap-[32px] p-[24px] lg:p-[48px] w-[100%] h-auto rounded-[16px]">
      <Image
        src={img}
        alt="Hero Image"
        width={1920}
        height={1080}
        className="w-full h-auto]"
        priority
      />
      <div className="flex flex-col gap-[48px] justify-between h-full ">
        <div className="flex flex-col gap-[16px] h-[100%] w-full ">
          <h2>{header}</h2>
          <h3>{body}</h3>
        </div>

        {cta2 == null ? (
          <div className="flex flex-row gap-[24px]">
            <Button size="large" style="primary" cta={cta1link}>
              {cta1}
            </Button>
          </div>
        ) : (
          <div className="flex flex-row  gap-[16px] md:gap-[24px]">
            <Button size="large" style="primary" cta={cta1link}>
              {cta1}
            </Button>
            <Button size="large" style="primary" cta={cta2link}>
              {cta2}
            </Button>
          </div>
        )}

        {
          //checks if instagram and linkedin links are available, otherwise removes them.
          instagram || linkedin === "" ? (
            ""
          ) : (
            <div className="flex flex-row gap-[24px]">
              {/* Instagram CTA */}
              <a href={instagram} target="_blank" rel="noopener noreferrer">
                <InstagramIcon fontSize="large" className="text-white" />
              </a>

              {/* LinkedIn CTA */}
              <a href={linkedin} target="_blank" rel="noopener noreferrer">
                <LinkedInIcon fontSize="large" className="text-white" />
              </a>
            </div>
          )
        }
      </div>
    </div>
  );
}

export default imglabel;
