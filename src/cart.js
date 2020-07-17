import React, { useContext } from 'react';
import { CartContext } from './cartContext';



export const Cart = () => {


    // const[cart , setCart] = useContext(CartContext);
    // let { transactions, addTransaction, deleteTransaction } = useContext(CartContext);
    let { transactions, deleteTransaction } = useContext(CartContext);

    const total = () => {
        var totalamount = 0;
        transactions.map((item) => {
            totalamount += item.amount;
            return totalamount;
        })
        return totalamount;
    }

    const handleDelete = (ind) => {
        deleteTransaction({ id: ind })
        console.log(ind)
    }


    const RenderCartDetail = () => {

        const cartDetail = transactions.map((item, ind) => {
            return <li>Product {ind + 1} Price : {item.amount} <button onClick={() => { handleDelete(ind) }}>Remove</button></li>
        })

        if (transactions.length === 0) {
            return <h6>Your Cart is Empty</h6>
        }
        else {
            return cartDetail;
        }

    }


    return (
        <div>
            <span>Item in cart : {transactions.length}</span>
            <br />
            <span>Total price: {total()}</span>
            <div>
                <h3>Cart Item Details</h3>
                <ul>
                    <RenderCartDetail />
                </ul>
            </div>
        </div>
    )
}

export default Cart;
