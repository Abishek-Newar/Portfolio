


export default function AboutDivs(){
    const theme = localStorage.getItem("modes")
    const cards = [{
        title: "About Me",
        description: "Hello! I am Abishek, a passionate 21-year-old Full Stack developer from the lively city of kokrajhar,Assam. I enjoy in crafting digital experiences"
    },{
        title: "Professional Background",
        description: "I'm Front-end Developer who specializes in React. My tech Journey includes learning backend technologies such as Node.js, Express, MongoDb and front-end such as Html, CSS, React. This skill set helps me work smoothly across the entire development process"
    },{
        title: "Current Focus",
        description: "Currently, my focus is centers on React for Front-end and Node.js for Backend. I am currently aiming to skill up to Next.js for front-end, Node.js for backend. Additionally I am eager to learn DevOps practices to enhance the deployment and system maintenence"
    }]

    const education = [{
        degree: "B.E",
        year: "2020 - present",
        college: "Chadigarh University"
    },{
        degree: "Senior Secondary",
        year: "2018-2020",
        college: "Caesar School"
    },{
        degree: "Matriculation",
        year : "2017-2018",
        college: "Caesar School"
    }]
    return <div className={` font-chill flex flex-col pt-64 pb-10   items-center justify-center ${theme == "dark"? "bg-bgds":"bg-white"} gap-10`}>
            <div className={`flex flex-wrap gap-8  items-center justify-center  text-texts ` }>
                {cards.map((card)=>(
                    <div className={` w-[350px] h-[400px] border-2 rounded-lg p-10 ${theme == "dark"? "border-brdr": "border-red-300"}`}>
                        <h1 className="text-2xl font-semibold mb-6">{card.title}</h1>
                         <p>{card.description}</p>
                    </div>
                ))}
            </div>
            <div className={`border-2 w-[74%] rounded-lg ${theme == "dark"? "border-brdr": "border-red-300" } p-8`}  >
                <h1 className={` text-3xl mb-8  ${theme == "dark"? "text-white":"text-bgds"} font-bold`}>Education</h1>
                {education.map((edu)=>(
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