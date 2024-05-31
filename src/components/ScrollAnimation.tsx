
import Lenis from "lenis";
import { useEffect, useRef } from "react";
import Picture1 from "../assets/Picture1.png"
import Picture2 from "../assets/Picture2.png"
import Picture3 from "../assets/Picture3.png"
import { useScroll, useTransform, motion } from "framer-motion";

export default function ScrollAniamtion() {
    const theme = localStorage.getItem("modes")
  const container = useRef<any>()
  const {scrollYProgress} = useScroll({
    target: container.current,
    offset: ["start end","end start"]
  })
  useEffect(()=>{
    const lenis = new Lenis()
    function raf(time:any) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  },[])
  return (
    <div className={`${theme == "dark"? "bg-bgds text-white": "bg-white text-bgds"} font-chill overflow-hidden`}>
    <div className="h-[30vh]"></div>
    <div ref={container} >
    <Slider text1="Front End Developer" text2="Back  End Developer" text3="Full Stack Developer" left="-55%" progress={scrollYProgress} direction="left"/>
    <Slider text1="Back  End Developer" text2="Full Stack Developer" text3="Front End Developer" left="-15%" progress={scrollYProgress} direction="right" />
    <Slider text1="Full Stack Developer" text2="Front End Developer" text3="Back End Developer"  left="-35%" progress={scrollYProgress} direction="left"/>
    </div>
    <div className="h-[30vh]"></div>
    </div>
  );
}
interface SliderProps{
  text1: string,
  text2: string,
  text3: string,
  left: string,
  progress: any,
  direction: string
}
function Slider({text1,text2,text3,left,progress,direction}:SliderProps){
  const dir = direction == "left"? -1 : 1
  const x = useTransform(progress,[0,1],[-250*dir,250*dir])
  return (
    <motion.div className=" relative flex whitespace-nowrap text-6xl gap-6 "
    style={{left,x}}>
      <Phrase text={text1} src={Picture1} /> 
    <Phrase text={text2} src={Picture2} /> 
    <Phrase text={text3} src={Picture3} />
    </motion.div>
  )
}
 interface PhraseProps{
  text: string,
  src: string
 }
function Phrase({text,src}:PhraseProps){
  return (
    <div className="flex items-center mb-5 gap-6">
      <p className="text-[5.5vw]">{text}</p>
      <span className="relative h-[5.5vw] aspect-[4/2] rounded-full overflow-hidden">
        <img style={{objectFit: "cover"}} alt="" src={src} />
      </span>
    </div>
  )
}
