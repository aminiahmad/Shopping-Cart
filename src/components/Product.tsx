import {Card ,Button} from "react-bootstrap"
import {useCartContext} from "../context/CartContext"
type productProps={
    id: number,
    title: string,
    price: number,
    imgUrl: string
}

function Product({id,title,price,imgUrl}:productProps){
    const {getItemQty,addItem,subItem,removeItem}=useCartContext()
    const qty=getItemQty(id)
    return(
        <Card className="h-100" style={{direction: 'rtl'}}>
            <Card.Img 
                variant="top"
                src={imgUrl}
                height="200px"
                style={{objectFit:"contain"}}
                />
            <Card.Body 
                className="d-flex flex-column bg-dark">
                <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
                    <span className="fs-2 text-light">{title}</span>
                    <span className="ms-2 text-light">{price}</span>
                </Card.Title>
                {qty===0?(
                    <Button className="w-100 btn-secondary" onClick={()=>{addItem(id)}}>Add To Cart</Button>
                ):(
                <div className="d-flex flex-column align-items-center" style={{gap:".5rem"}}>
                    <div className="d-flex justify-content-center align-items-center" style={{gap:".5rem"}}>
                        <Button className="btn-secondary" onClick={()=>{addItem(id)}}>+</Button>
                        <span className="fs-5 m-4">{qty}</span>
                        <Button className="btn-secondary" onClick={()=>{subItem(id)}}>-</Button>
                    </div>
                <Button className="btn-danger" size='sm' onClick={()=>{removeItem(id)}}>Remove</Button>   
                </div> 
                        )}
                

            </Card.Body>
        </Card>
    )
}
export default Product