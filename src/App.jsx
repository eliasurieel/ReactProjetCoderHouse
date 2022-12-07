import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Footer"
import OwnNavbar from "./components/OwnNavbar"
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer";
import CartWidget from "./components/CartWidget";
import 'bootstrap/dist/css/bootstrap.min.css'
import "./app.css"

const App = () => {
  return (
      <BrowserRouter>
        <OwnNavbar />
        <Routes>
          <Route path= "/" element={<ItemListContainer />} />
          <Route path="/categoria/:idCategory" element={<ItemListContainer />} />
          <Route path="/item/:idItem" element={<ItemDetailContainer />} />
          <Route path="/carrito" element={<CartWidget />} />
        </Routes>
        <Footer />
    </BrowserRouter >
  )
}

export default App; 