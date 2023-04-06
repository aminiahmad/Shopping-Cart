import {Routes , Route} from "react-router-dom"
import {Container} from "react-bootstrap"
import Home from "./pages/Home"
import About from "./pages/About"
import Shop from "./pages/Shop"
import {CartProvider} from "./context/CartContext"

import Navbar from "./components/Navbar"

function App (){
  return (
    <CartProvider>
    <Navbar />
    <Container>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Shop" element={<Shop />} />
    </Routes>
    </Container>
    </CartProvider>
  )
}

export default App