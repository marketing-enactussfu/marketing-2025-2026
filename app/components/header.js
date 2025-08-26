import React from 'react'

function header({ header, body }) {
    return (
        <div className='flex flex-col gap-[16px] px-[100px] py-[48py] lg:max-w-[80%] w-full'>
            <h1>{header}</h1>
            <h2 className='text-primary-yellow'>{body} </h2>
        </div>
    )
}

export default header