import { BrowserRouter,Routes,Route } from "react-router-dom"
import Header from "./component/header/Header"
import Contact from "./pages/contact/Contact"
import Pricing from "./pages/pricing/Pricing"
import Footer from "./component/footer/Footer"
import Home from "./pages/home/Home"

function App() {

  return (
    <>
      <BrowserRouter>
          <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/pricing' element={<Pricing />}></Route>
        </Routes>
          <Footer/>

      </BrowserRouter>
    </>
  )
}

export default App
