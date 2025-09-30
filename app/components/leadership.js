import React from 'react'
import Image from 'next/image'

function leadership({ img, name, position, linkedin, key }) {
    return (
        <div className='flex flex-col items-center gap-[16px] flex-grow min-w-[20px] lg:max-w-[18%] md:max-w-[20%] max-w-[45%]' key={key}>
            <div className='relative'>
                <a href={linkedin} target="_blank">
                    <div className='w-full h-full bg-gradient-to-br from-[#DD7600] to-[#C80D00] absolute hover:opacity-[20%] opacity-[0] hover:cursor-pointer duration-300 transition-ease-in-out'>
                    </div>
                </a>
                <Image
                    src={img}
                    alt={name}
                    width={200}
                    height={200}
                    className="h-auto w-auto"
                />
            </div>
            <div className='flex flex-col gap-[-10px] text-center'>
                <h3> {name} </h3>
                <p className='opacity-[60%]'>{position}</p>
            </div>
        </div >
    )
}

export default leadership