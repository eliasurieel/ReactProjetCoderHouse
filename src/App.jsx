import Maquillajes from "./Maquillajes";
import Footer from "./Footer"
import OwnNavbar from "./components/OwnNavbar"
import ItemListContainer from "./components/ItemListContainer"
import CartWidget from "./components/CartWidget";
import "./app.css"

const App = () => {
  return (
    <div>
      <OwnNavbar />
      <ItemListContainer mensaje = "Item #1"/>
      <Footer />
    </div>
  )
}

export default App; 