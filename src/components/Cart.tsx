
import {useCartContext} from "../context/CartContext"
import {Offcanvas , Stack} from "react-bootstrap"
import CartItem from "./CartItem"

type cartProps={
    isOpen: boolean
}
function Cart({isOpen}: cartProps){
    const {closeCart , cartItems}= useCartContext()
    return(
        <Offcanvas show={isOpen} onHide={closeCart} placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title className="text-dark">Cart</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Stack gap={3} >
                    {
                        cartItems.map((item)=>(
                            <CartItem key={item.id} {...item} />
                        ))
                    }
                    
                </Stack>
            </Offcanvas.Body>
        </Offcanvas>

    )
}

export default Cart