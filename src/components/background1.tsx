
import myself1 from "./../assets/myself1.jpg"
import { useEffect, useRef, useState } from 'react';
// @ts-ignore
import * as THREE from 'three';
// @ts-ignore
import VANTA from 'vanta/dist/vanta.net.min';
export default function Background1(){
    const [vantaEffect, setVantaEffect] = useState(0);
    const vantaRef = useRef(null);
    const mode = localStorage.getItem("modes");

    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(
                VANTA({
                    el: vantaRef.current,
                    THREE: THREE,
                    mouseControls: true,
                    touchControls: true,
                    gyroControls: false,
                    minHeight: 200.00,
                    minWidth: 200.00,
                    scale: 1.00,
                    scaleMobile: 1.00,
                    color: mode != "light" ? 0x1b1c20 : 0xFCA5A5,
                    backgroundColor: mode != "light" ? 0x09090B : 0xffffff,
                    points: 6,
                    maxDistance: 23,
                    spacing: 15,
                    showDots: false
                })
            );
        }
        return () => {
            //@ts-ignore
            if (vantaEffect) vantaEffect.destroy();
        }
    }, [vantaEffect, mode]);
    return <div ref={vantaRef} className={`min-h-screen ${mode != "light"? "bg-bgds text-white":"bg-white text-bgds"}  flex items-center justify-around select-none`}>
        <div  
        className=" w-[20rem] sm:w-[32rem] md:w-[43rem] flex flex-col items-center justify-center anime">
            <h2 className=" text-center  text-4xl font-semibold">Hi, I'm</h2>
            <h1 className="md:text-[10rem] text-start font-bold sm:text-8xl text-6xl">ABISHEK</h1>
            <div className=" w-[20rem] sm:w-[32rem] md:w-[43rem] flex items-center justify-center pl-10 md:p-0">
            <h3 className=" text-xs sm:text-xl">Architecting Seamless Experiences, From Intuitive  Interfaces to Robust, Scalable  APIs and  Backends. Your Full-Stack MERN Solution.</h3>
            </div>
            <br />
            <div>
            <a href="/about" className={` px-5 py-3 font-chill font-semibold rounded-md transition-all ease-in-out duration-500 ${mode != "light"? "bg-white text-bgds hover:bg-forHover hover:text-white":"bg-bgds text-white hover:bg-red-300 hover"}`}>About Me</a>
        </div>
        </div>
        <div className="hidden lg:block w-96 h-96 min-w-24 min-h-24 overflow-hidden  animate-wiggle ">
            <img src={myself1} alt="Abishek" />
        </div>
        
    </div>

}