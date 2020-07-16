import React, { useContext } from 'react';
import { CartContext } from './cartContext';



export const Cart = () => {


    // const[cart , setCart] = useContext(CartContext);
    // let { transactions, addTransaction, deleteTransaction } = useContext(CartContext);
    let { transactions, deleteTransaction} = useContext(CartContext);

    const total = () => {
        var totalamount = 0;
        transactions.map((item) => {
            totalamount += item.amount;
            return totalamount;
        })
        return totalamount;
    }

    const handleDelete = (ind)=> {
        deleteTransaction({id:ind+1})
        console.log(ind)
    }

    const cartDetail = transactions.map((item, ind) => {
        return <li>Product {ind + 1} Price : {item.amount} <button onClick={()=>{handleDelete(ind)}}>Remove</button></li>
    })

    return (
        <div>
            <span>Item in cart : {transactions.length}</span>
            <br />
            <span>Total price: {total()}</span>
            <div>
                <h3>Cart Item Details</h3>
                <ul>
                    {cartDetail}
                </ul>
            </div>
        </div>
    )
}

export default Cart;
