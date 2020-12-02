import React, { useContext } from 'react';
import { CartContext } from './cartContext';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';


import './cart.css'




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
        return (
            transactions.map((item, ind) => {
                let num = ind+1;
                return (
                    <div class='cart-item-chip-div'>
                        {/* <li>Product {ind + 1} Price : {item.amount} <button onClick={() => { handleDelete(ind) }}>Remove</button></li> */}

                        <Chip className='cart-item-chip' label={<h2>Product  {num} Price : {item.amount}</h2>} onDelete={() => { handleDelete(ind) }} color="primary" />

                    </div>
                )
            })
        )
    }

    if (transactions.length === 0) {
        return (
            <div className="container">
                <Grid container
                    spacing={0}
                    align="center"
                    justify="center"
                    direction="column" >
                    <Grid item md={12}  >
                        <img className='cart-empty-img' src={process.env.PUBLIC_URL + 'cart-empty.jpg'} alt='cart-empty.jpgs' />
                    </Grid>
                </Grid>
            </div>
        )

    }
    else {
        return (
            <div>
                <Grid container
                    spacing={0}
                    align="center"
                    justify="center"
                    direction="column" >
                    <span>Item in cart : {transactions.length}</span>
                    <br />
                    <span>Total price: {total()}</span>
                    <div>

                        <Grid item md={12}  >
                            <h3>Cart Item Details</h3>
                        </Grid>
                        <Grid item md={12}  >
                            {/* <ul> */}
                            <RenderCartDetail />
                            {/* </ul> */}
                        </Grid>
                    </div>
                </Grid>
            </div>
        )
    }



}

export default Cart;
