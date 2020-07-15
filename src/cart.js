import React, { useContext } from 'react';
import { CartContext } from './cartContext';



export const Cart = () => {


    // const[cart , setCart] = useContext(CartContext);
    let { transactions, addTransaction, deleteTransaction } = useContext(CartContext);


    console.log(transactions);

    const total = () => {
        var totalamount = 0;
        transactions.map((item) => {
            totalamount += item.amount;
        })
        return totalamount;
    }

    const cartDetail = transactions.map((item, ind) => {
        return <li>Product {ind} Price : {item.amount}</li>
    })

    return (
        <div>
            <span>Item in cart : {transactions.length}</span>
            <br />
            <span>Total price: {total()}</span>
            <div>
                <ul>
                    {cartDetail}
                </ul>
            </div>
        </div>
    )
}

export default Cart;
