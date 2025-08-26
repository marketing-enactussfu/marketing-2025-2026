import React from 'react'
import BoltIcon from '@mui/icons-material/Bolt';

function iconLabel({ icon, header, body, subheader }) {
    return (
        <div className='p-[48px] bg-primary-gray rounded-sm flex flex-col gap-[16px]'>
            {icon}
            {subheader == null ? <h2>{header}</h2> :
                <div className='flex flex-col gap-[8px]'>
                    <h4 className='text-primary-yellow'>{subheader}</h4>
                    <h2>{header}</h2>
                </div>
        }
            <h3 className="opacity-60">{body}</h3>
        </div>
    )
}

export default iconLabel