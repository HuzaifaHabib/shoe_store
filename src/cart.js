import React,{useContext} from 'react';
import CartContext from './cartContext'



export const Cart = ()=> {

    const [cart, setCart] = useContext(CartContext);
    return(
        <div>
            <span>Item in cart : </span>
            <br/>
            <span>Total price: 0</span>
        </div>
    )
}

export default Cart;
