import React from 'react';
import ProductCard from './product'
import data from './../data.json';
import Grid from '@material-ui/core/Grid';



function Menu() {
    // console.log(data.product[0])
    const test = data.product[0]
    const test2 = Object.values(data)
    // console.log(test2)

    return (

        <div>
            <h1>Welcome To Menu</h1>

            {test2[0].map((data) => {
                return (
                    <Grid container spacing={3}>>
                        <Grid item xs={12} md={4}>
                            <ProductCard product={data} />
                        </Grid>
                    </Grid>
                )
            })}

        </div>



    )
}


export default Menu;