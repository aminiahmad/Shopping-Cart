import {Container , Navbar as NavbarBs, Nav , Button} from "react-bootstrap"
import {NavLink} from "react-router-dom"
import{useCartContext} from "../context/CartContext"
function Navbar(){
    const {cartQty , openCart , closeCart}=useCartContext()
    return (
    <NavbarBs className="bg-success mb-3">
        <Container>
            <Nav className="me-auto">
            <Nav.Link to="/" as={NavLink} className="text-light">Home</Nav.Link>
            </Nav>
            <Nav className="me-auto">
            <Nav.Link to="/About" as={NavLink} className="text-light">About</Nav.Link>
            </Nav>
            <Nav className="me-auto">
            <Nav.Link to="/Shop" as={NavLink} className="text-light">Shop</Nav.Link>
            </Nav>
            <Button onClick={openCart}  variant="outline-light" style={{width:'3rem', height:"3rem", position:"relative" ,fontSize:"1.3rem"}}>
                <i className="bi bi-cart"></i>
                <div
                className="rounded-circle bg-secondary d-flex justify-content-center align-items-center"
                style={{color:"white", width:"1.2rem", height:"1.2rem",position:"absolute", fontSize:"1.2rem", bottom:"0",right:"0" ,transform:"translate(25%,25%)", opacity:"0.8"}}
                >{cartQty}</div>
            </Button>
        </Container>
    </NavbarBs>
    )
}

export default Navbar