import React from 'react'
import Image from 'next/image'
import Leadership from "../components/leadership"
import Header from "../components/header"

function page() {
    const leadershipList = [
        { name: "Cameron Miranda", position: "Co - President", img: "/images/cameron.png", linkedin: "https://www.linkedin.com/in/cameronkmiranda/" },
        { name: "Lauren Riestra", position: "Co - President", img: "/images/lauren.png", linkedin: "https://www.linkedin.com/in/lauren-riestra-6643b6266/" },
        { name: "Amber Holliday", position: "VP of Internal", img: "/images/amber.png", linkedin: "https://www.linkedin.com/in/amber-holliday/" },
        { name: "Naia Wong", position: "VP of Strategy", img: "/images/naia.png", linkedin: 'https://www.linkedin.com/in/naia-wong/' },
        { name: "Vinay Aery", position: "VP of Strategy", img: "/images/vinay.png", linkedin: "https://www.linkedin.com/in/vinayaery/" },
        { name: "Peehu Gupta", position: "VP of Finance", img: "/images/peehu.png", linkedin: "https://www.linkedin.com/in/peehugupta2307/" },
        { name: "Steven Learmonth", position: "VP of Events", img: "/images/steven.png", linkedin: "https://www.linkedin.com/in/steven-learmonth/" },
        { name: "Olivia Cheng", position: "VP of Events", img: "/images/olivia.png", linkedin: "https://www.linkedin.com/in/steven-learmonth/" },
        { name: "Kevin Huang", position: "VP of External", img: "/images/kevin.png", linkedin: "https://www.linkedin.com/in/kevinhuangg/" },
        { name: "Marianne Li", position: "VP of External", img: "/images/marianne.png", linkedin: "https://www.linkedin.com/in/marianne-li1311/" },
        { name: "Stephanie Ma", position: "VP of Marketing", img: "/images/steph.png", linkedin: "https://www.linkedin.com/in/stephaniema926/" },
        { name: "Thy Vu", position: "VP of Marketing", img: "/images/thy.png", linkedin: "https://www.linkedin.com/in/thy-vu-556ba2265/" },
        { name: "Faith Leung", position: "Director of Design", img: "/images/faith.png", linkedin: "https://www.linkedin.com/in/faith-leung-/" },
        { name: "Cony Lee", position: "Director of Design", img: "/images/cony.png", linkedin: "https://www.linkedin.com/in/conyminkyunglee/" },
        { name: "Joseph Lee", position: "Director of Design", img: "/images/joseph.png", linkedin: "https://www.linkedin.com/in/joseph-lee-jl/" },
        { name: "Chloe Lu", position: "Director of Marketing Strategy", img: "/images/chloe.png", linkedin: "https://www.linkedin.com/in/chloelu02/" },
        { name: "Juliana Manalo", position: "Director of Media Production", img: "/images/juliana.png", linkedin: "https://www.linkedin.com/in/julianamanalo/" },
        { name: "Caleb Wu", position: "Director of Web Development", img: "/images/caleb.png", linkedin: "https://www.linkedin.com/in/caleb-wu-/" },
    ]
    const projectList = [
        // Project Operations
        { name: "Wilson Liang", position: "Co-PM of SKYES", img: "/images/wilson.png", linkedin: "https://www.linkedin.com/in/wilson-liang1/" },
        { name: "Francesca Yalung", position: "Co-PM of SKYES", img: "/images/francesca.png", linkedin: "https://www.linkedin.com/in/francesca-yalung-011b79229/" },
        { name: "Cedric Tanafranca", position: "Co-PM of Unify", img: "/images/cedric.png", linkedin: "https://www.linkedin.com/in/francesca-yalung-011b79229/" },
        { name: "Savar Gupta", position: "Co-PM of Unify", img: "/images/savar.png", linkedin: "https://www.linkedin.com/in/savar-gupta/" },
        { name: "Ruchi Sharma", position: "Co-PM of Alara", img: "/images/ruchi.png", linkedin: "https://www.linkedin.com/in/ruchisharmaa/" },
        { name: "Jaideep Kochhar", position: "Co-PM of Alara", img: "/images/jaideep.png", linkedin: "https://www.linkedin.com/in/jaideep2k/" },
        { name: "Anthony Perera", position: "PM of Nourish", img: "/images/anthony.png", linkedin: "https://www.linkedin.com/in/anthonyjperera/" },
    ];
    return (
        <div className='flex flex-col gap-[48px] gutter'>
            <Header header="Our Leadership Team" body="Core Operations" />
            <div className=' flex flex-col md:flex-col lg:flex-row flex-wrap gap-[24px]  justify-start'>
                {leadershipList.map((person) => (
                    <Leadership
                        name={person.name}
                        position={person.position}
                        img={person.img}
                        key={person.name}
                        linkedin={person.linkedin}
                    ></Leadership>
                ))}
            </div>
            <h3 className='text-primary-yellow mt-[2rem]'> Project Operations </h3>
            <div className=' flex flex-col md:flex-col lg:flex-row flex-wrap gap-[24px] justify-start '>
                {projectList.map((person) => (
                    <Leadership
                        name={person.name}
                        position={person.position}
                        img={person.img}
                        key={person.name}
                        linkedin={person.linkedin}
                    ></Leadership>
                ))}
            </div>
        </div >

    )
}

export default page