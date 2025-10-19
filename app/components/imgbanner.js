import React from "react";
import Button from "../components/button";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Image from "next/image";

function imgbanner({ header, body, cta1, cta2, instagram, linkedin, img }) {
  return (
    <div className="flex flex-col gap-[36px]">
      <div className="w-full h-[600px] relative overflow-hidden">
        <Image
          src={img}
          alt="Hero Image"
          fill
          className="object-cover"
          priority
          unoptimized
        />
      </div>
      <div className="flex flex-col gap-[36px] md:gap-[48px] justify-between h-full ">
        <div className="flex flex-col gap-[16px] h-[100%] w-full ">
          <h2>{header}</h2>
          <h3>{body}</h3>
        </div>

        {cta1 ?

          cta2 == null ? (
            <div className="flex flex-row gap-[24px]">
              <Button size="large" style="primary">
                {cta1}
              </Button>
            </div>
          ) : (
            <div className="flex flex-row gap-[24px]">
              <Button size="large" style="primary">
                {cta1}
              </Button>
              <Button size="large" style="primary">
                {cta2}
              </Button>
            </div>
          )
          :
          ""
        }

        {
          //checks if instagram and linkedin links are available, otherwise removes them.
          instagram || linkedin ? (
            <div className="flex flex-row gap-[24px]">
              {/* Instagram CTA */}
              {instagram && (
                <a href={instagram} target="_blank" rel="noopener noreferrer">
                  <InstagramIcon fontSize="large" className="white" />
                </a>
              )}

              {/* LinkedIn CTA */}
              {linkedin && (
                <a href={linkedin} target="_blank" rel="noopener noreferrer">
                  <LinkedInIcon fontSize="large" className="white" />
                </a>
              )}
            </div>
          ) : (
            ""
          )
        }
      </div>
    </div>
  );
}

export default imgbanner;
