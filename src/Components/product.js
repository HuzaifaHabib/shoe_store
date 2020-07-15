import React,{useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import {CartContext} from '../cartContext'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function ProductCard({product}) {
  const classes = useStyles();

  let { transactions, addTransaction, deleteTransaction } = useContext(CartContext);

  const addToCart = (product)=>{
    addTransaction({
      amount : product.price
    })
    console.log(product.price)
  }


  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={product.productName}
          height="160"
          image={product.productImage}
          title={product.productName}
        />
        <CardContent>
          {/* <Typography gutterBottom variant="h5" component="h3">
            {product.productName}
          </Typography> */}
          <h3>{product.productName}</h3>
          <h2>{product.price} PKR</h2>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" >
          Details
        </Button>
        <Button size="small" color="primary" onClick={()=>(addToCart(product))}>
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
}
