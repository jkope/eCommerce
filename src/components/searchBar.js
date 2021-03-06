import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import store from '../store';


const styles = theme => ({
    root: {
        width: '100%',
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing.unit * 2,
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing.unit * 3,
            width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing.unit * 9,
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
        width: '100%',
    },
    inputInput: {
        paddingTop: theme.spacing.unit,
        paddingRight: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
        paddingLeft: theme.spacing.unit * 10,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: 200,
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
});

const mapStateToProps = (state) => {
        return {
        cart: state.cart,
        userName: state.userName
    }
}



class PrimarySearchAppBar extends React.Component {
    
    state = {
        anchorEl: null,
        mobileMoreAnchorEl: null,
    };

    count =() => (this.props.cart.reduce((a, b) => ({ count: a.count + b.count })).count)

    handleProfileMenuOpen = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    string = (e) => {
            store.dispatch({ type: 'SEARCH', value: e.target.value })
    }

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography className={classes.title} variant="h6" color="inherit" noWrap>
                            <Link to={{ pathname: '/' }} style={{ textDecoration: 'none', color: 'inherit' }}>
                            Shoppity-Shop
                            </Link>
            </Typography>
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase
                                placeholder="Search…"
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                                onChange={this.string}
                            />
                        </div>
                        <div className={classes.grow} />
                        <div className='row'>
                            <Link to={{ pathname: '/signin' }} style={{ textDecoration: 'none', color: 'inherit' }}>
                            <p>{this.props.userName}</p>
                            </Link>
                            <Link to={{ pathname: '/cart' }} style={{ textDecoration: 'none', color: 'inherit' }}>
                            <IconButton color="inherit" >
                                {this.props.cart.length ? 
                                    <Badge badgeContent={
                                        this.count()
                                    }
                                        color="secondary">
                                        <ShoppingCartIcon />
                                    </Badge> : 
                                            <ShoppingCartIcon />
                                }
                            </IconButton>
                            </Link>
                            <Link to={{ pathname: '/signin' }} style={{ textDecoration: 'none', color: 'inherit' }}>
                            <IconButton
                                aria-haspopup="true"
                                onClick={this.handleProfileMenuOpen}
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton>
                            </Link>
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

PrimarySearchAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
    cart: PropTypes.arrayOf(
        PropTypes.shape({item: PropTypes.object, count: PropTypes.number})
    )

};


export default connect(mapStateToProps)(withStyles(styles)(PrimarySearchAppBar));
