import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import Contact from "./pages/Contact"
import Blogs from "./pages/Blogs"
import USA from "./pages/USA"
import Canada from "./pages/Canada"
import UK from "./pages/UK"
import Malaysia from "./pages/Malaysia"
import SouthKorea from "./pages/SouthKorea"
import Australia from "./pages/Australia"
import Japan from "./pages/Japan"
import France from "./pages/France"
import ScrollToTop from "./ScrollToTop"
import Navbar from "./components/layout/Navbar"
import Footer from "./components/layout/Footer"
import Gallery from "./pages/Gallery"
import OurTeamSection from "./pages/Our_Team"
import SOPLandingPage from "./pages/SOPLandingPage"
import NotFound from "./pages/NotFound"


export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/blog' element={<Blogs />} />
        <Route path='/blog/sop_writing' element={<SOPLandingPage />} />


        <Route path='/gallery' element={<Gallery />} />
        <Route path='/country/usa' element={<USA />} />
        <Route path='/country/canada' element={<Canada />} />
        <Route path='/country/uk' element={<UK />} />
        <Route path='/country/malaysia' element={<Malaysia />} />
        <Route path='/country/southkorea' element={<SouthKorea />} />
        <Route path='/country/australia' element={<Australia />} />
        <Route path='/country/japan' element={<Japan />} />
        <Route path='/country/france' element={<France />} />
        <Route path='/ourteam' element={<OurTeamSection />} />



        <Route path='*' element={<NotFound />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}
