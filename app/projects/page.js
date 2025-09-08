import React from 'react'
import Header from "../components/header"
import ImgLabel from "../components/imglabel"

function page() {
    return (
        <div className='flex flex-col gutter'>
            <Header
                header="Projects"
                body="What we’re currently working on.">
            </Header>


            <ImgLabel
                header="SKYES"
                body="SKYES is an entrepreneurial education initiative that aims to educate underprivileged youth in South and South-East Asia with entrepreneurial education to drive local economic development and to alleviate the stresses of mass migration on international economies."
                cta1="Visit Website"></ImgLabel>
        </div>
    )
}

export default page