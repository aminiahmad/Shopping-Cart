import productItems from "../data/products.json"
import {Col,Row} from "react-bootstrap"
import Product from "../components/Product"
function Shop (){
    return (
        <>
        <Row className="g-3" md={2} xs={1} lg={3} >
             {productItems.map((item)=>(
                <Col key={item.id}>
                    <Product {...item} />
                </Col>
             ))}
        </Row>
        </>
        
    )
}

export default Shop