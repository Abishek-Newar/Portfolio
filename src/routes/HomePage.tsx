
import Background1 from "./../components/background1"
import Navbar from "./../components/navbar"
import Project from "./../components/project"
import TechStack from "./../components/techStack"
import Footers from "./../components/Footer"


function Homepage() {
  

  return (
    <div >
      <Navbar />
      <Background1 />
      <TechStack />
      <Project />
      <Footers />
    </div>
  )
}

export default Homepage

