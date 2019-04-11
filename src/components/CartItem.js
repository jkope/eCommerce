import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './cartItem.css';
import IconButton from '@material-ui/core/IconButton';
import ArrowDown from '@material-ui/icons/ArrowDownward';
import ArrowUp from '@material-ui/icons/ArrowUpward';
import Delete from '@material-ui/icons/Delete';
import store from '../store';

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
    },
});



class CartItem extends Component {
    increaseQuantity = () => {
        store.dispatch({ type: 'CHANGE_QUANTITY', item: this.props.product.item, direction: 'increase' })
    }
    decreaseQuantity = () => {
        store.dispatch({ type: 'CHANGE_QUANTITY', item: this.props.product.item, direction: 'decrease' })
    }
    removeItem = () => {
        store.dispatch({ type: 'REMOVE', item: this.props.product.item })
    }


    render() {
        const { item } = this.props.product
        const { count } = this.props.product
        return (
            <Paper elevation={1} className='line'>
                <img src={item.img} alt={item.title} style={{ width: 'auto', height: '100px' }} />
                <div className='txtgroup'>
                    <Typography variant="title" component="h3">
                        {item.title}
                    </Typography>
                    <div className='subtxt'>
                        <p className='cnt'>Quantity</p>
                        <p className='cnt'>{count}</p>
                        <div className='arrows'>
                            <IconButton
                                aria-haspopup="true"
                                onClick={this.increaseQuantity}
                                color="inherit"
                            >
                                <ArrowUp />
                            </IconButton>
                            <IconButton
                                disabled={count===0}
                                aria-haspopup="true"
                                onClick={this.decreaseQuantity}
                                color="inherit"
                            >
                                <ArrowDown />
                            </IconButton>
                            </div>
                            <IconButton
                                aria-haspopup="true"
                                onClick={this.removeItem}
                                color="inherit"
                            >
                                <Delete />
                            </IconButton>
                    </div>
                </div>
            </Paper>
        );
    }
}

CartItem.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(CartItem);

