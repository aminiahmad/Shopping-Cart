import {createContext , useContext , ReactNode, useState} from "react";
import Cart from "../components/Cart"
import {setLocalStorage} from "../hooks/setLocalStorage"
type providerContextProps={
    children: ReactNode
}
type CartItem={
    id: number
    qty: number
}
type CartContext={
    openCart: () => void
    closeCart: () => void
    getItemQty: (id: number)=> number
    addItem: (id: number)=> void
    subItem: (id: number)=> void
    removeItem: (id: number)=> void
    cartQty: number
    cartItems: CartItem[]
}

const cartContext=createContext({} as CartContext)

export function useCartContext(){
     return useContext(cartContext)
}

export function CartProvider({ children }: providerContextProps){
        const [isOpen, setIsOpen] = useState(false)
        const [cartItems,setCartItems]=setLocalStorage<CartItem[]>(
            "shopping-cart", []
        )
        const cartQty= cartItems.reduce((qty,item)=> item.qty+ qty ,0)
        const openCart=()=> setIsOpen(true)
        const closeCart=()=> setIsOpen(false)
        function getItemQty(id: number){
            return cartItems.find((item)=> item.id===id)?.qty || 0
        }
        function addItem(id: number){
            setCartItems((currItems)=>{
                if(currItems.find((item)=>item.id===id)==null){
                    return [...currItems, {id, qty:1}]
                }
                else{
                   return currItems.map((item)=>{
                        if(item.id===id){
                            return {...item , qty : item.qty+1}
                        }
                        else{
                            return item
                        }
                    })
                }
                
            })
        }
        function subItem(id: number){
            setCartItems((currItems)=>{
                if (currItems.find((item)=>item.id==id)?.qty==1)
                {
                return currItems.filter((item)=>item.id !== id)
                }
                else
                {
                    return currItems.map((item)=>{
                        if(item.id===id) {
                            return {...item, qty: item.qty-1}
                        }
                        else{
                            return item
                        }
                    })  
                }
            })
        }
        function removeItem(id: number){
            setCartItems((currItems)=>{
              return currItems.filter((item)=>item.id !==id)
            })

        }
        return ( 
        <cartContext.Provider value={{getItemQty , addItem , subItem , removeItem , cartQty , cartItems , openCart,closeCart}}>
            <Cart isOpen={isOpen} />
        {children}
        </cartContext.Provider>
        )
}

