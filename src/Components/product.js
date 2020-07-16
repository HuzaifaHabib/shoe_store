import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { CartContext } from '../cartContext';
import PropTypes from 'prop-types';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import { useSpring, animated } from "react-spring"



const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

const ModelStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Fade = React.forwardRef(function Fade(props, ref) {
  const { in: open, children, onEnter, onExited, ...other } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter();
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited();
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  );
});

Fade.propTypes = {
  children: PropTypes.element,
  in: PropTypes.bool.isRequired,
  onEnter: PropTypes.func,
  onExited: PropTypes.func,
};




export default function ProductCard({ product }) {
  const classes = useStyles();
  const ModalClass = ModelStyles();

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // let { transactions, addTransaction, deleteTransaction } = useContext(CartContext);
  let { addTransaction } = useContext(CartContext);


  const addToCart = (product) => {
    addTransaction({
      amount: product.price,
      id: product.productID
    })
    console.log(product.price)
  }

  return (
    <React.Fragment>
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
        <Button size="small" color="primary" onClick={handleOpen}>
          Details
        </Button>
        <Button size="small" color="primary" onClick={() => (addToCart(product))}>
          Add to Cart
        </Button>
      </CardActions>
    </Card>
    <Modal
      aria-labelledby="spring-modal-title"
      aria-describedby="spring-modal-description"
      className={ModalClass.modal}
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <div className={ModalClass.paper}>
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
        <Button size="small" color="primary" onClick={() => (addToCart(product))}>
          Add to Cart
        </Button>
      </CardActions>
    </Card>
        </div>
      </Fade>
    </Modal>
    </React.Fragment>
  );
}
