import React from 'react'
import Image from 'next/image'

function leadership({ img, name, position, linkedin, key }) {
    return (
        <div className='flex flex-col gap-[0px] w-[20%] h-[fit]' key={key}>
            <Image
                src={img}
                alt={name}
                width={200}
                height={200}
                className="h-fit w-auto"
            />
            <div className='flex flex-col gap-[4px]'>
                <h3> {name} </h3>
                <p>{position}</p>
            </div>
        </div>
    )
}

export default leadership