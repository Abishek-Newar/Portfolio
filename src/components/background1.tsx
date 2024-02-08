
import myself1 from "./../assets/myself1.jpg"
import {easeOut, motion} from "framer-motion"

export default function Background1(){



    const mode = localStorage.getItem("modes");
    return <div className={`h-screen ${mode == "dark"? "bg-bgds text-white":"bg-white text-bgds"}  flex items-center justify-around select-none`}>
        <motion.div  
        initial={{ scale: 0 }}
        animate={{  scale: 1 }}
        transition={{
            ease: "easeOut",
            duration: 2,
          type: "spring",
          stiffness: 260,
          damping: 20}}
        className=" w-[20rem] sm:w-[32rem] md:w-[43rem] flex flex-col items-center justify-center anime">
            <h2 className=" text-center  text-4xl font-semibold">Hi, I'm</h2>
            <h1 className="md:text-[10rem] text-start font-bold sm:text-8xl text-6xl">ABISHEK</h1>
            <div className=" w-[20rem] sm:w-[32rem] md:w-[43rem] flex items-center justify-center pl-10 md:p-0">
            <h3 className=" text-xs sm:text-xl">A passionate Full Stack Developer Based in India specializing in building Web Application, Backend Apis</h3>
            </div>
            <br />
            <div>
            <a href="/about" className={` px-5 py-2 font-chill font-semibold rounded-md transition-all ease-in-out duration-500 ${mode == "dark"? "bg-white text-bgds hover:bg-forHover hover:text-white":"bg-bgds text-white hover:bg-red-300 hover"}`}>About Me</a>
        </div>
        </motion.div>
        <div className="hidden lg:block w-96 h-96 min-w-24 min-h-24 overflow-hidden  animate-wiggle ">
            <img src={myself1} alt="" />
        </div>
        
    </div>
}