import Item from "./item"
import Row from "react-bootstrap/Row"
import { Spinner } from "reactstrap"

const itemList = ({items}) =>{
    return(
        <Row xs={1} sm={2} md={3} lg={5} className="m-3 p-3">
        {
        items.length > 0
        ? items.map(item => (<Item key={item.id} {...item}/>))
        : <Spinner size="lg" color="danger" />
        }
        </Row>
    )
}

export default itemList