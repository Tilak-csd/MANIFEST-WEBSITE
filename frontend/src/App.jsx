import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import Contact from "./pages/Contact"
import Blogs from "./pages/Blogs"
import USA from "./pages/CountryPage/USA"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/blog' element={<Blogs />} />
        <Route path='/country/usa' element={<USA />} />
      </Routes>
    </BrowserRouter>
  )
}
