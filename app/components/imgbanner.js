import React from 'react'
import Button from "../components/button"
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Image from "next/image";

function imgbanner({ header, body, cta1, cta2, instagram, linkedin, img }) {
    return (
        <div className='flex flex-col gap-[16px]'> 
            <Image
                src={img}
                alt="Hero Image"
                width={1920}
                height={1080}
                className="w-full h-[600px] object-cover"
                priority
            />
            <div className='flex flex-col gap-[48px] justify-between h-full '>
                <div className='flex flex-col gap-[16px] h-[100%] w-full '>
                    <h2>{header}</h2>
                    <h3>{body}</h3>
                </div>

                {cta2 == null ?
                    <div className='flex flex-row gap-[24px]'>
                        < Button size='large' style='primary'>
                            {cta1}
                        </Button>

                    </div>
                    :
                    <div className='flex flex-row gap-[24px]'>
                        < Button size='large' style='primary'>
                            {cta1}
                        </Button>
                        < Button size='large' style='primary'>
                            {cta2}
                        </Button>
                    </div>
                }

                {
                    //checks if instagram and linkedin links are available, otherwise removes them.
                    instagram || linkedin === "" ? "" :
                        <div className='flex flex-row gap-[24px]'>
                            {/* Instagram CTA */}
                            <a
                                href={instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <InstagramIcon fontSize="large" className="white" />
                            </a>

                            {/* LinkedIn CTA */}
                            <a
                                href={linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <LinkedInIcon fontSize="large" className="white" />
                            </a>
                        </div>
                }

            </div>
        </div>
    )
}

export default imgbanner