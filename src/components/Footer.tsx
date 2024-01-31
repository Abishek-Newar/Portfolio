import { FaLinkedin } from "react-icons/fa";
import {  FaSquareGithub, FaXTwitter } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import { SlLocationPin } from "react-icons/sl";
export default function Footers(){
    const theme  = localStorage.getItem("modes");
    return <div className={`flex  items-center justify-around w-full select-none ${theme == "dark"? "bg-bgds": "bg-white"} `}>
    <div className={`flex flex-col lg:flex-row w-full justify-between ${theme == "dark"? "text-white border-forHover":"text-bgds border-red-300"} bg-transparent backdrop-blur-sm  px-10 py-6  h-auto lg:mx-56 my-7 border-[0.1px] rounded-lg `}>
        <nav className={` flex items-center font-chill text-end gap-10 transition-all ease-linear duration-300  `}>
            <a href="https://linkedin.com/in/abishek-newar-a67141225"><FaLinkedin className="w-9 h-9" /></a>
            <a href="https://github.com/Abishek-Newar"><FaSquareGithub className="w-9 h-9" /></a>
            <a href="https://x.com/abiiNewar?t=Hgrz-uUBA8tNP_UC19CYZA&s=09"><FaXTwitter className="w-9 h-9" /></a>
            
        </nav>
        <div >
        <div className="flex items-center mb-2 gap-2">
            <CiMail className="w-6 h-6" />
            <h3>abisheknewar15@gmail.com</h3>
        </div>
        <div className="flex items-center gap-2">
            <SlLocationPin className="w-6 h-6" />
            <h3>Mohali, Punjab</h3>
        </div>
        </div>
    </div>
    </div>
}