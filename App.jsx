import { BrowserRouter, Routes ,Route } from "react-router-dom"
import Navbar from "./component/Navbar"
import About from "./pages/about/About"
import Contact from "./pages/contact/Contact"
import Gallery from "./pages/gallery/Gallery"
import Home from "./pages/home/Home"
import NotFound from "./pages/notFound/NotFound"
import Plans from "./pages/plans/Plans"
import Trainers from "./pages/trainers/Trainers"
import Footer from "./component/Footer"

const App = () => {
  return (
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="plan" element={<Plans />} />
        <Route path="trainers" element={<Trainers />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      </BrowserRouter>
  )
}
export default App