import { FiGithub } from "react-icons/fi";
import { FaExternalLinkAlt, FaRegFolder } from "react-icons/fa";



export default function Project(){
    const project1 = [{
        n: "React"
    },{
        n:"Node"
    },{
        n: "Express"
    },{
        n: "JWT"
    }]
    const project2 = [{
        n: "HTML"
    },{
        n:"CSS"
    },{
        n: "JavaScript"
    },{
        n: "PHP"
    }]
    const theme = localStorage.getItem("modes")
    return <div className={`${theme == "dark"? "bg-bgds text-white": "bg-white text-bgds"} font-chill py-32`}>
        <h1 className="text-center text-4xl font-semibold font-chill mb-24 ">Projects</h1>
        <div className=" flex flex-wrap justify-center gap-8 ">
            <div className={`border-2 w-[450px] rounded-lg p-10 flex flex-col gap-10 ${theme == "dark"? "border-brdr": "border-red-300"} `}>
                <div className="flex justify-between items-center">
                    <FaRegFolder className="w-8 h-8" />
                    <div className="flex gap-3">
                        <FaExternalLinkAlt />
                        <a href="https://github.com/Abishek-Newar/LearningMERN/tree/main/paytm_clone"><FiGithub /></a>
                    </div>
                </div>
                <div className="">
                <h1 className="text-4xl text-texts font-semibold mb-4">Payments-App</h1>
                <h3 className="font-light text-md text-texts">Welcome To Payments-App, Your Go-To Platform for transactions </h3>
                </div>
                <div className="flex gap-4">
                    {project1.map((project)=>(
                        <p className="text-texts text-xs ">{project.n}</p>
                    ))}
                </div>
            </div>
            <div className={`border-2 w-[450px] rounded-lg p-10 flex flex-col gap-10 ${theme == "dark"? "border-brdr": "border-red-300"} `}>
                <div className="flex justify-between items-center  ">
                    <FaRegFolder className="w-8 h-8" />
                    <div className="flex gap-3">
                        <FaExternalLinkAlt />
                        <a href="https://github.com/Abishek-Newar/Restaurant-Website"><FiGithub /></a>
                    </div>
                </div>
                <div className="">
                <h1 className="text-4xl font-semibold mb-4 text-texts">Restaurant Website</h1>
                <h3 className="font-light text-md text-texts">Welcome To Retaurant-website, Your Go-To Platform for food order,dining booking and party boookings </h3>
                </div>
                <div className="flex gap-4">
                    {project2.map((project)=>(
                        <p className="text-texts text-xs ">{project.n}</p>
                    ))}
                </div>
            </div>
            
        </div>
        
    </div>
}