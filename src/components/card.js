import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import store from '../store';
import {Link} from 'react-router-dom';

const styles = theme => ({
    card: {
        maxWidth: 400,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    actions: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
});

class ProductCard extends React.Component {
    state = { expanded: false };

    addToCart = (id) => {
        store.dispatch({ type: 'ADD_TO_CART', item: id })
        console.log(store.getState().cart)
    }

    handleExpandClick = () => {
        this.setState(state => ({ expanded: !state.expanded }));
    };

    render() {
        return (
            <Card key={this.props.id} className={this.props.classes.card}>
                <CardHeader
                    action={
                        <IconButton aria-label="Add to Cart"
                            onClick={() => this.addToCart(this.props.id)}
                        >
                            <ShoppingCartIcon />
                        </IconButton>
                    }
                    title={this.props.title}
                />
                <Link to={`/ProductDetails/${this.props.id}`}>
                    <CardMedia
                        className={this.props.classes.media}
                        image={this.props.img}
                        title={this.props.title}
                    />
                </Link>
                <CardActions className={this.props.classes.actions} disableActionSpacing>
                    See Descripiton
                    <IconButton
                        className={classnames(this.props.classes.expand, {
                            [this.props.classes.expandOpen]: this.state.expanded,
                        })}
                        onClick={this.handleExpandClick}
                        aria-expanded={this.state.expanded}
                        aria-label="Show more"
                    >
                        <ExpandMoreIcon />
                    </IconButton>
                </CardActions>
                <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography paragraph>
                            {this.props.description}
                        </Typography>
                    </CardContent>
                </Collapse>
            </Card>
        );
    }
}

ProductCard.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(ProductCard);