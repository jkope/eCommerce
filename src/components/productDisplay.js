import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './productDisplay.css';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import IconButton from '@material-ui/core/IconButton';

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        height: '100vh'
    },
});

function PaperSheet(props) {
    const { classes } = props;

    console.log(props.product)
    return (

        <div>
            <Paper className={classes.root} elevation={1}>
                <div className='row'>
                    <Typography variant="h5" component="h3">
                        {props.product.title}
                    </Typography>
                    <div>
                        <Typography component="h3">
                            ${props.product.price}
                        </Typography>
                        <IconButton aria-label="Add to Cart"
                            onClick={() => props.addToCart(props.product)}
                        >
                            <ShoppingCartIcon />
                        </IconButton>
                    </div>
                </div>
                <Typography component="p">
                    {props.product.description}
                </Typography>
                <div className='image' style={{ backgroundImage: "url(" + props.product.img + ")" }}>&nbsp;</div>
            </Paper>
        </div>
    );
}

PaperSheet.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperSheet);