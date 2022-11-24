import { FaShoppingCart } from "react-icons/fa";
import Nav from "react-bootstrap/Nav"

const CartWidget = ({cantidad}) => {
    return (
        <Nav.Link className="cart-container">
            <FaShoppingCart />
            <span className="cantidad" >{cantidad}</span>
        </Nav.Link>
    )
}

export default CartWidget;