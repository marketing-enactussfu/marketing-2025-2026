import React from 'react'

function modal({ name, body }) {
    return (
        <div className='rounded-[16px] bg-[#282828] p-12'>
            <h2 className='text-[32px] font-bold leading-[1.4] tracking-tight text-[#FAFAFA]'>
                {name ?? 'Title'}
            </h2>
            <p className='mt-4 text-[24px] font-semibold leading-[1.4] text-[#D4D4D4]'>
                {body ?? 'Body copy goes here as a placeholder.'}
            </p>
        </div>
    )
}

export default modal