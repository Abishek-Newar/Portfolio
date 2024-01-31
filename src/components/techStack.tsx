

export default function TechStack(){
    const techs = [{
        name: "React",
        link: "https://skillicons.dev/icons?i=react"
    },{
        name: "Node",
        link: "https://skillicons.dev/icons?i=nodejs"
    },{
        name: "Tailwind",
        link: "https://skillicons.dev/icons?i=tailwind"
    },{
        name: "javaScript",
        link: "https://skillicons.dev/icons?i=javascript"
    },{
        name: "mongoDB",
        link: "https://skillicons.dev/icons?i=mongo"
    },{
        name: "github",
        link: "https://skillicons.dev/icons?i=github"
    }]

    const frontend = [{
        name: "HTML"
    },{
        name: "CSS"
    },{
        name: "React"
    },{
        name:"Tailwind"
    }];
    const backend = [{
        name: "MongoDB"
    },{
        name: "Node"
    },{
        name:"Express"
    }];
    const others = [{
        name: "TypeScript"
    },{
        name: "JavaScript"
    },{
        name: "Git"
    },{
        name: "C++"
    },{
        name: "Java"
    }]
    const theme = localStorage.getItem("modes");
    return <div className={`${theme == "dark"? "bg-bgds text-white":"bg-white text-bgds"} mx-auto select-none `}>
        <h1 className="text-center text-4xl font-semibold mb-10  ">Tech Stack</h1>
        <div className={ `flex flex-wrap gap-4 justify-center mb-32`}>
            {techs.map((tech)=>(
                <div className={`w-24 h-24 border-2 ${theme=="dark"? "border-brdr":"border-red-300"} flex items-center justify-center rounded-lg `}>
                    <img className="transition-all ease-in-out duration-500 hover:scale-110" src={tech.link} alt={tech.name} />
                </div>
            ))}
        </div>
        <div className="flex flex-wrap gap-8 p-10 font-chill  justify-center ">
            <div className={`border-2 w-[450px] h-[350px]  p-16 rounded-lg transition-all ease-in-out duration-500 ${theme == "dark"? "bg-bgds border-brdr hover:bg-forHover": "bg-white border border-red-300 hover:bg-red-300"} `}>
                <h1 className="text-center text-lg font-semibold mb-10">FrontEnd</h1>
                <div className="flex flex-wrap justify-center gap-4">
                    {frontend.map((front)=>(
                        <div className={`border rounded-md h-8 items-center  w-20 flex py-1 justify-center transition-all ease-in-out duration-500  ${theme == "dark"? "bg-forHover border-brdr hover:bg-bgds": "bg-red-300 border-red-300 hover:bg-white"} `}>
                            <h3 className="text-xs font-light">{front.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
            <div className={`border-2 w-[450px] h-[350px]  p-16 rounded-lg transition-all ease-in-out duration-500 ${theme == "dark"? "bg-bgds border-brdr hover:bg-forHover": "bg-white border-red-300 hover:bg-red-300"} `}>
                <h1 className="text-center text-lg font-semibold mb-10">BackEnd</h1>
                <div className="flex flex-wrap justify-center gap-4">
                    {backend.map((back)=>(
                        <div className={`border rounded-md py-1 h-8 items-center  w-20 flex justify-center transition-all ease-in-out duration-500 ${theme == "dark"? "bg-forHover border-brdr hover:bg-bgds": "bg-red-300 border-red-300 hover:bg-white"} `}>
                            <h3 className="text-xs font-light">{back.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
            <div className={`border-2 w-[450px] h-[350px]  p-16 rounded-lg transition-all ease-in-out duration-500 ${theme == "dark"? "bg-bgds border-brdr hover:bg-forHover": "bg-white border-red-300 hover:bg-red-300"} `}>
                <h1 className="text-center text-lg font-semibold mb-6">Others</h1>
                <div className="flex flex-wrap justify-center gap-4">
                    {others.map((other)=>(
                        <div className={`border  rounded-md py-1 h-8 items-center   w-20 flex justify-center transition-all ease-in-out duration-500 ${theme == "dark"? "bg-forHover border-brdr hover:bg-bgds": "bg-red-300 border-red-300 hover:bg-white"} `}>
                            <h3 className="text-xs font-light">{other.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
}