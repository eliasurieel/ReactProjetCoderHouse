import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import { Link } from "react-router-dom"

const item = ({ id, thumbnail, price, title }) => {
    return (
        <Card className='p-3'>
            <Card.Img variant="top" src={thumbnail} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>$ {price}</Card.Text>
                <Button as={Link} to={`/item/${id}`} variant="primary">Ver producto</Button>
            </Card.Body>
        </Card>
    )
}

export default item