
import { Link } from "react-router-dom";
import ProjectCom from "./projectCom";



export default function Project(){
    
    const projects = [{
        title: "SyncWrite",
        description: "Welcome To SyncWrite, A docs editor where you can collab live with your others to update documents",
        tech: ["Nextjs","Clerk","TypeScript","Liveblocks"],
        github: "https://github.com/Abishek-Newar/syncwrite",
        link: "https://syncwrite-liard.vercel.app/"
    },{
        title: "Blog-App",
        description: "Welcome to Blog-App, A go to place for yo to post yours journals and blogs",
        tech: ["React","Hono","Tailwind","JWT","PostgreSqL"],
        github: "https://github.com/Abishek-Newar/Blog-App",
        link: "https://myjournal-pink.vercel.app"
    },{
        title: "Restaurant Website",
        description: "Welcome To Retaurant-website, Your Go-To Platform for food order,dining booking and party boookings",
        tech: ["HTML","CSS","JavaScript"],
        github: "https://github.com/Abishek-Newar/Restaurant-Website",
        link: "https://restaurant-website-red.vercel.app/"
    }]
    

    const theme = localStorage.getItem("modes")
    return <div className={`${theme == "dark"? "bg-bgds text-white": "bg-white text-bgds"} font-chill py-32`}>
        <h1 className="text-center text-4xl font-semibold font-chill mb-24 ">Projects</h1>
        <div className=" flex flex-wrap justify-center gap-8 ">
            {
                projects.map((item,index)=>(
                    <ProjectCom key={index} title={item.title} description={item.description} tech={item.tech} github={item.github} link={item.link} />
                ))
            }
        </div>
        <div className="flex justify-center mt-10">
            <Link to="/projects"><button className={` px-5 py-3 font-chill font-semibold rounded-md uppercase transition-all ease-in-out duration-500 ${theme == "dark"? "bg-white text-bgds hover:bg-forHover hover:text-white":"bg-bgds text-white hover:bg-red-300 hover"}`} >More Projects</button></Link>
        </div>
    </div>
}