import React from 'react'


function YearLabel({ header, subheader1, body1, subheader2, body2 }) {
    return (
        <div className='bg-primary-gray p-[48px] flex flex-row rounded-sm gap-[48px] w-full '>
            <div className='flex flex-col lg:flex-row gap-[58px] min-w-0'>
                <h2 className='whitespace-nowrap flex-shrink-0 '>{header}</h2>
                <div className='flex flex-col gap-[16px] flex-1 min-w-0'>
                    <div className='flex flex-col lg:flex-row gap-[24px] min-w-0'>
                        <h3 className='text-primary-yellow whitespace-nowrap flex-shrink-0'>{subheader1}</h3>
                        <h3 className='  w-[100%]'>{body1}</h3>
                    </div>
                    <div className='flex flex-col lg:flex-row gap-[24px] min-w-0'>
                        <h3 className='text-primary-yellow whitespace-nowrap flex-shrink-0'>{subheader2}</h3>
                        <h3 className=' w-[100%]'>{body2}</h3>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default YearLabel