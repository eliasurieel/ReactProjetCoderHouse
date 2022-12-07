import Button from "react-bootstrap/Button"
import { Spinner } from "reactstrap"

const itemDetail = ({item}) => {
    return(
        <>
        {
            item && item.thumbnail
            ?
            <>
            <div className="product-wrapper">
                <div className="product-image">
                    <img className="" src={item.thumbnail} alt="" />
                </div>
                <div className="product-text">
                    <p className="product-title">{item.title}</p>
                    <p>Precio: $ {item.price}</p>
                    <p>Unidades en stock: {item.stock}</p>
                    <Button className="pb-1">Agregar al carrito</Button>
                    <p><b>Descripcion:</b></p>
                    <p className="bottom">{item.description}</p>
                </div>
            </div>
            </>
            : <Spinner className="spinner" color="danger" />
        }
        </>
    )
}

export default itemDetail