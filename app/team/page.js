import React from 'react'
import Leadership from "../components/leadership"
import Header from "../components/header"

function page() {
    const leadershipList = [
        { name: "Naia Wong", position: "President", img: "/images/leadership/naia.jpg", linkedin: "https://www.linkedin.com/in/naia-wong/" },
        { name: "Marianne Li", position: "Co-VP Ops", img: "/images/leadership/marianne.jpg", linkedin: "https://www.linkedin.com/in/marianne-li1311/" },
        { name: "Wilson Liang", position: "Co-VP Ops", img: "/images/leadership/wilson.jpg", linkedin: "https://www.linkedin.com/in/wilson-liang1/" },
        { name: "Hussain Naqvi", position: "Co-VP Strategy", img: "/images/leadership/hussain.jpg", linkedin: "https://www.linkedin.com/in/hussainaqvi/" },
        { name: "Liam Santos", position: "Co-VP Strategy", img: "/images/leadership/liam.jpg", linkedin: "https://www.linkedin.com/in/liam-santoss/" },
        { name: "Chloe Lu", position: "Co-VP Marketing", img: "/images/leadership/chloe.jpg", linkedin: "https://www.linkedin.com/in/chloelu02/" },
        { name: "Faith Leung", position: "Co-VP Marketing", img: "/images/leadership/faith.jpg", linkedin: "https://www.linkedin.com/in/faith-leung-/" },
        { name: "Michelle So", position: "Co-VP Inno", img: "/images/leadership/michelle-so.jpg", linkedin: "https://www.linkedin.com/in/michelle-so-221680295/" },
        { name: "Winnie Wang", position: "Co-VP Inno", img: "/images/leadership/winnie.jpg", linkedin: "https://www.linkedin.com/in/winniiewg/" },
        { name: "Patty Rattanaleelart", position: "Director Interal", img: "/images/leadership/patty.jpg", linkedin: "https://www.linkedin.com/in/patty-rattanaleelart/" },
        { name: "Steven Learmonth", position: "Director of Finance", img: "/images/leadership/steven.jpg", linkedin: "https://www.linkedin.com/in/steven-learmonth/" },
        { name: "Anthea Deng", position: "Co-Director of Media", img: "/images/leadership/anthea.jpg", linkedin: "https://www.linkedin.com/in/antheadeng/" },
        { name: "Kaden Fong", position: "Co-Director of Media", img: "/images/leadership/kaden.jpg", linkedin: "https://www.linkedin.com/in/kaden-fong/" },
        { name: "Clarissa Maloco", position: "Director of Marketing Strategy", img: "/images/leadership/clarissa.jpg", linkedin: "https://www.linkedin.com/in/clarissa-maloco-0053aa33a/" },
        { name: "Michelle Lee", position: "Co-Director of Design", img: "/images/leadership/michelle-lee.jpg", linkedin: "https://www.linkedin.com/in/michelle-lee-5025ab220/" },
        { name: "Rebecca Yeung", position: "Co-Director of Design", img: "/images/leadership/rebecca.jpg", linkedin: "https://www.linkedin.com/in/rebecca-yeung-/" },
        { name: "Stephanie Mok", position: "Co-Director of Design", img: "/images/leadership/steph.jpg", linkedin: "https://www.linkedin.com/in/stephanie-mok7/" },
        { name: "Juliana Manalo", position: "Co-Director of Events", img: "/images/leadership/juliana.jpg", linkedin: "https://www.linkedin.com/in/julianamanalo/" },
        { name: "Scott Higgins", position: "Co-Director of Events", img: "/images/leadership/scott.jpg", linkedin: "https://www.linkedin.com/in/scotthiggins02/" },
        { name: "Adrian Lai", position: "Co-Director of External", img: "/images/leadership/adrian.jpg", linkedin: "https://www.linkedin.com/in/adrian-lai-172017292/" },
        { name: "Nikita Venkatachellum", position: "Co-Director of External", img: "/images/leadership/nikita.jpg", linkedin: "#" },
        { name: "Caleb Wu", position: "Director of Web & Tech", img: "/images/leadership/caleb.jpg", linkedin: "https://www.linkedin.com/in/caleb-wu-/" },
    ]
    const projectList = [
        // Project Operations
        { name: "Wilson Liang", position: "PM of SKYES", img: "/images/wilson2.jpg", linkedin: "https://www.linkedin.com/in/wilson-liang1/" },
        { name: "Francesca Yalung", position: "PM of SKYES", img: "/images/franchesca2.jpg", linkedin: "https://www.linkedin.com/in/francesca-yalung-011b79229/" },
        { name: "Cedric Tanafranca", position: "PM of Unify", img: "/images/cedric2.jpg", linkedin: "https://www.linkedin.com/in/francesca-yalung-011b79229/" },
        { name: "Savar Gupta", position: "PM of Unify", img: "/images/savar2.jpg", linkedin: "https://www.linkedin.com/in/savar-gupta/" },
        { name: "Ruchi Sharma", position: "PM of Alara", img: "/images/ruchi2.jpg", linkedin: "https://www.linkedin.com/in/ruchisharmaa/" },
        { name: "Jaideep Kochhar", position: "PM of Alara", img: "/images/jai2.jpg", linkedin: "https://www.linkedin.com/in/jaideep2k/" },
        { name: "Anthony Perera", position: "PM of Nourish", img: "/images/anthony2.jpg", linkedin: "https://www.linkedin.com/in/anthonyjperera/" },
        { name: "Aryan Kaul", position: "PM of SensMS", img: "/images/aryan2.jpg", linkedin: "https://www.linkedin.com/in/aryan-kaul-b28016275/" },
        { name: "Hanko Ngu", position: "PM of SensMS", img: "/images/hanko2.jpg", linkedin: "https://www.linkedin.com/in/hankongu/" },
        { name: "Valeria Lozada", position: "PM of Renova", img: "/images/val2.jpg", linkedin: "https://www.linkedin.com/in/valeria-lozada-108150315/" },
        { name: "Michael Gudz", position: "PM of NextSpark", img: "/images/michael2.jpg", linkedin: "https://www.linkedin.com/in/michaelgudz123/" },
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