import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToHash from './components/ScrollToHash'
import Home from './pages/Home'
import LabCapabilities from './pages/LabCapabilities'
import ProgramsAccess from './pages/ProgramsAccess'
import ProjectsImpact from './pages/ProjectsImpact'
import AboutContact from './pages/AboutContact'
import PrototypingLab from './pages/PrototypingLab'

function App() {
  return (
    <Router>
      <ScrollToHash />
      <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary selection:text-primary-foreground flex flex-col">
        <Header />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/prototyping-lab" element={<PrototypingLab />} />
            <Route path="/nidhi-prayas-shala" element={<PrototypingLab />} />
            <Route path="/landing" element={<PrototypingLab />} />
            <Route path="/lab" element={<LabCapabilities />} />
            <Route path="/programs" element={<ProgramsAccess />} />
            <Route path="/projects" element={<ProjectsImpact />} />
            <Route path="/about" element={<AboutContact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App
