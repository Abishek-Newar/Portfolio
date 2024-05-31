import {BrowserRouter, Routes, Route}  from "react-router-dom"
import Homepage from "./routes/HomePage"
import About from "./routes/About"
import Projects from "./routes/Projects"


function App() {
  

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="projects" element={<Projects />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
