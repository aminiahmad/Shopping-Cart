import productItems from  "../data/products.json"
import {useCartContext} from "../context/CartContext"
import {Stack , Button} from "react-bootstrap"
type cartItemProps={
    id: number
    qty: number
}

function CartItem({id , qty}: cartItemProps){
    const {removeItem}= useCartContext()
    const product= productItems.find((item)=>item.id===id)

    if(product==null) return null

    return (
        <Stack direction="horizontal" gap={2}>
            <img
                src={product.imgUrl}
                style={{width:"125px" , height:"75px" , objectFit:"contain"}}
            />
            <div className="text-dark">
                <div>
                    {product.title} {` : ${qty} `}
                    
                </div>
                <div>
                    {product.price * qty}
                </div>
                <Button onClick={()=>removeItem(product.id)}>remove</Button>
            </div>
        </Stack>
        
    )

}
export default CartItem