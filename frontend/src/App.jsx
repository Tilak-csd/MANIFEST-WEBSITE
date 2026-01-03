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

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/blog' element={<Blogs />} />
        <Route path='/country/usa' element={<USA />} />
        <Route path='/country/canada' element={<Canada />} />
        <Route path='/country/uk' element={<UK />} />
        <Route path='/country/malaysia' element={<Malaysia />} />
        <Route path='/country/south-korea' element={<SouthKorea />} />
        <Route path='/country/australia' element={<Australia />} />
        <Route path='/country/japan' element={<Japan />} />
        <Route path='/country/france' element={<France />} />
      </Routes>
    </BrowserRouter>
  )
}
