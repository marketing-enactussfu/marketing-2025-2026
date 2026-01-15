import React from 'react'
import Leadership from "../components/leadership"
import Header from "../components/header"

function page() {
    const leadershipList = [
        { name: "Cameron Miranda", position: "President", img: "/images/cameron2.jpg", linkedin: "https://www.linkedin.com/in/cameronkmiranda/" },
        { name: "Lauren Riestra", position: "President", img: "/images/lauren2.jpg", linkedin: "https://www.linkedin.com/in/lauren-riestra-6643b6266/" },
        { name: "Amber Holliday", position: "VP of Internal", img: "/images/amber2.png", linkedin: "https://www.linkedin.com/in/amber-holliday/" },
        { name: "Naia Wong", position: "VP of Strategy", img: "/images/naia2.jpg", linkedin: 'https://www.linkedin.com/in/naia-wong/' },
        { name: "Vinay Aery", position: "VP of Strategy", img: "/images/vinay2.jpg", linkedin: "https://www.linkedin.com/in/vinayaery/" },
        { name: "Peehu Gupta", position: "VP of Finance", img: "/images/peehu2.png", linkedin: "https://www.linkedin.com/in/peehugupta2307/" },
        { name: "Steven Learmonth", position: "VP of Events", img: "/images/steven2.jpg", linkedin: "https://www.linkedin.com/in/steven-learmonth/" },
        { name: "Olivia Cheng", position: "VP of Events", img: "/images/olivia2.jpg", linkedin: "https://www.linkedin.com/in/steven-learmonth/" },
        { name: "Kevin Huang", position: "VP of External", img: "/images/kevin2.png", linkedin: "https://www.linkedin.com/in/kevinhuangg/" },
        { name: "Marianne Li", position: "VP of External", img: "/images/marianne2.png", linkedin: "https://www.linkedin.com/in/marianne-li1311/" },
        { name: "Stephanie Ma", position: "VP of Marketing", img: "/images/steph2.png", linkedin: "https://www.linkedin.com/in/stephaniema926/" },
        { name: "Thy Vu", position: "VP of Marketing", img: "/images/thy2.png", linkedin: "https://www.linkedin.com/in/thy-vu-556ba2265/" },
        { name: "Faith Leung", position: "Director of Design", img: "/images/faith2.png", linkedin: "https://www.linkedin.com/in/faith-leung-/" },
        { name: "Cony Lee", position: "Director of Design", img: "/images/cony2.png", linkedin: "https://www.linkedin.com/in/conyminkyunglee/" },
        { name: "Joseph Lee", position: "Director of Design", img: "/images/joseph2.png", linkedin: "https://www.linkedin.com/in/joseph-lee-jl/" },
        { name: "Chloe Lu", position: "Director of Marketing Strategy", img: "/images/chloe2.png", linkedin: "https://www.linkedin.com/in/chloelu02/" },
        { name: "Juliana Manalo", position: "Director of Media Production", img: "/images/juliana2.png", linkedin: "https://www.linkedin.com/in/julianamanalo/" },
        { name: "Caleb Wu", position: "Director of Web Development", img: "/images/caleb2.png", linkedin: "https://www.linkedin.com/in/caleb-wu-/" },
    ]
    const projectList = [
        // Project Operations
        { name: "Wilson Liang", position: "PM of SKYES", img: "/images/wilson2.png", linkedin: "https://www.linkedin.com/in/wilson-liang1/" },
        { name: "Francesca Yalung", position: "PM of SKYES", img: "/images/franchesca2.png", linkedin: "https://www.linkedin.com/in/francesca-yalung-011b79229/" },
        { name: "Cedric Tanafranca", position: "PM of Unify", img: "/images/cedric2.png", linkedin: "https://www.linkedin.com/in/francesca-yalung-011b79229/" },
        { name: "Savar Gupta", position: "PM of Unify", img: "/images/savar2.png", linkedin: "https://www.linkedin.com/in/savar-gupta/" },
        { name: "Ruchi Sharma", position: "PM of Alara", img: "/images/ruchi2.png", linkedin: "https://www.linkedin.com/in/ruchisharmaa/" },
        { name: "Jaideep Kochhar", position: "PM of Alara", img: "/images/jai2.png", linkedin: "https://www.linkedin.com/in/jaideep2k/" },
        { name: "Anthony Perera", position: "PM of Nourish", img: "/images/anthony2.png", linkedin: "https://www.linkedin.com/in/anthonyjperera/" },
        { name: "Aryan Kaul", position: "PM of SensMS", img: "/images/aryan2.png", linkedin: "https://www.linkedin.com/in/aryan-kaul-b28016275/" },
        { name: "Hanko Ngu", position: "PM of SensMS", img: "/images/hanko2.png", linkedin: "https://www.linkedin.com/in/hankongu/" },
        { name: "Valeria Lozada", position: "PM of Renova", img: "/images/val2.png", linkedin: "https://www.linkedin.com/in/valeria-lozada-108150315/" },
        { name: "Michael Gudz", position: "PM of NextSpark", img: "/images/michael2.png", linkedin: "https://www.linkedin.com/in/michaelgudz123/" },
    ];
    return (
        <div className='flex flex-col gap-[48px] gutter'>
            <Header header="Our Leadership Team" body="Core Operations" />
            <div className='flex flex-wrap gap-[24px] justify-start flex-row'>
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
            <h2 className='text-primary-yellow mt-[2rem]'> Project Operations </h2>
            <div className='flex flex-wrap gap-[24px] justify-start flex-row'>
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