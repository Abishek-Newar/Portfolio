

import Contributions from "./Contributions";
export default function AboutDivs() {
    const theme = localStorage.getItem("modes")
    const cards = [{
        title: "About Me",
        description: "Hello! I am Abishek, a passionate 23-year-old Full Stack developer from the lively city of kokrajhar,Assam. I enjoy in crafting digital experiences"
    }, {
        title: "Professional Background",
        description: "I’m a Full Stack Developer specializing in Next.js. My expertise spans both front-end and back-end development, working with technologies like React, Node.js, Express, MongoDB, PostgreSQL, and Prisma. I focus on building scalable, efficient, and user-friendly web applications."
    }, {
        title: "Current Focus",
        description: "My current focus is on full-stack development using React, Node.js, and Next.js. I am continuously working to deepen my expertise in building scalable and efficient web applications. Additionally, I am eager to learn DevOps practices to enhance deployment, automation, and system maintenance."
    }]

    const education = [{
        degree: "B.E",
        year: "2020 - 2024",
        college: "Chadigarh University"
    }, {
        degree: "Senior Secondary",
        year: "2018-2020",
        college: "Caesar School"
    }, {
        degree: "Matriculation",
        year: "2017-2018",
        college: "Caesar School"
    }]

    const experience = [{
        role: "Full Stack Developer",
        company: "Infotechmon Pvt. Ltd.",
        year: "April 2024 - Feb 2025"
    }, {
        role: "Web Developer",
        company: "Cool Plugins",
        year: "Mar 2025 - Oct 2025"
    }, {
        role: "Junior Developer",
        company: "Webethics Solutions",
        year: "Nov 2025 - Present"
    }]
    return <div className={` font-chill flex flex-col pt-64 pb-10   items-center justify-center ${theme != "light" ? "bg-bgds" : "bg-white"} gap-10`}>
        <div className={`flex flex-wrap gap-8  items-center justify-center  text-texts `}>
            {cards.map((card) => (
                <div className={` w-[350px] h-[400px] border-2 rounded-lg p-10 ${theme != "light" ? "border-brdr" : "border-red-300"} transition-all ease-in-out duration-500 hover:translate-y-[-7px]`}>
                    <h1 className="text-2xl font-semibold mb-6">{card.title}</h1>
                    <p>{card.description}</p>
                </div>
            ))}
        </div>
        <Contributions theme={theme as string} />
        <div className={`border-2 w-[74%] rounded-lg ${theme != "light" ? "border-brdr" : "border-red-300"} p-8`}  >
            <h1 className={` text-3xl mb-8  ${theme != "light" ? "text-white" : "text-bgds"} font-bold`}>Experience</h1>
            {experience.map((edu) => (
                <div className="text-spcl mb-5">
                    <div className="flex justify-between">
                        <h1 className="text-xl text-texts text-semibold " >{edu.role}</h1>
                        <h2>{edu.year}</h2>
                    </div>
                    <h3>{edu.company}</h3>
                </div>
            ))}
        </div>
        <div className={`border-2 w-[74%] rounded-lg ${theme != "light" ? "border-brdr" : "border-red-300"} p-8`}  >
            <h1 className={` text-3xl mb-8  ${theme != "light" ? "text-white" : "text-bgds"} font-bold`}>Education</h1>
            {education.map((edu) => (
                <div className="text-spcl mb-5">
                    <div className="flex justify-between">
                        <h1 className="text-xl text-texts text-semibold " >{edu.degree}</h1>
                        <h2>{edu.year}</h2>
                    </div>
                    <h3>{edu.college}</h3>
                </div>
            ))}
        </div>
    </div>
}