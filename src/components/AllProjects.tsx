import ProjectCom from "./projectCom";

const AllProjects = () => {
    const mode = localStorage.getItem("modes");
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
        title: "Payments-App",
        description: "Welcome To Payments-App, Your Go-To Platform for transactions",
        tech: ["React","Node","Express","JWT"],
        github: "https://github.com/Abishek-Newar/LearningMERN/tree/main/paytm_clone",
        link: "https://github.com/Abishek-Newar/LearningMERN/tree/main/paytm_clone"
    },{
        title: "Restaurant Website",
        description: "Welcome To Retaurant-website, Your Go-To Platform for food order,dining booking and party boookings",
        tech: ["HTML","CSS","JavaScript"],
        github: "https://github.com/Abishek-Newar/Ecommerce",
        link: "https://github.com/Abishek-Newar/Ecommerce"
    },{
        title: "Ecommerce",
        description: "Welcome To Grace Attire, Your Go-To Platform for Shopping, clothings",
        tech: ["React","Tailwind","Node","Firebase","MongoDB"],
        github: "https://github.com/Abishek-Newar/Restaurant-Website",
        link: "https://restaurant-website-red.vercel.app/"
    },{
        title: "Expense Tracker",
        description: "Welcome To Expenses, Your Go-To Platform for managing your expenses",
        tech: ["React"," Tailwind"," Node", "Chartjs","MongoDB"],
        github: "https://github.com/Abishek-Newar/ExpenseTracker",
        link: "https://github.com/Abishek-Newar/ExpenseTracker"
    },{
        title: "StackQuest",
        description: "Welcome To StackQuest, A Platform where you can post quesreies and solve queries of other peoples",
        tech: ["Nextjs","Appwrite","Tailwind"],
        github: "https://github.com/Abishek-Newar/stackquest",
        link: "https://github.com/Abishek-Newar/stackquest"
    }]
  return (
    <div className={`${mode == "dark"? "bg-bgds text-white": "bg-white text-bgds"} font-chill py-44 px-[5%] `}>
        <h1 className="text-center text-4xl font-semibold font-chill mb-12 ">Projects</h1>
        <div className=" flex flex-wrap justify-center gap-8 ">
            {
                projects.map((item,index)=>(
                    <ProjectCom key={index} title={item.title} description={item.description} tech={item.tech} github={item.github} link={item.link} />
                ))
            }
        </div>
        {/* <div className="flex justify-center mt-10">
            <Link to="/projects"><button className={` px-5 py-3 font-chill font-semibold rounded-md uppercase transition-all ease-in-out duration-500 ${mode == "dark"? "bg-white text-bgds hover:bg-forHover hover:text-white":"bg-bgds text-white hover:bg-red-300 hover"}`} >More Projects</button></Link>
        </div> */}
    </div>
  )
}

export default AllProjects