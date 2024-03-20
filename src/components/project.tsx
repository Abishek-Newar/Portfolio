
import ProjectCom from "./projectCom";



export default function Project(){
    
    const projects = [{
        title: "Blog-App",
        description: "Welcome to Blog-App, A go to place for yo to post yours journals and blogs",
        tech: ["React","Hono","Tailwind","JWT","PostgreSqL"],
        github: "https://github.com/Abishek-Newar/Blog-App",
        link: "https://myjournal-pink.vercel.app"
    },{
        title: "Payments-App",
        description: "Welcome To Payments-App, Your Go-To Platform for transactions",
        tech: ["React","Node","Express","JWT"],
        github: "https://github.com/Abishek-Newar/LearningMERN/tree/main/paytm_clone",
        link: ""
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
            <a className={` px-5 py-3 font-chill font-semibold rounded-md uppercase transition-all ease-in-out duration-500 ${theme == "dark"? "bg-white text-bgds hover:bg-forHover hover:text-white":"bg-bgds text-white hover:bg-red-300 hover"}`} href="https://github.com/Abishek-Newar" target="_blank">More Projects</a>
        </div>
    </div>
}