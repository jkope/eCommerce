import React from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import './footer.css'
import { Link } from 'react-router-dom';

// const styles = {
//     root: {
//         width: 500,
//     },
// };

class SimpleBottomNavigation extends React.Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {

        return (
            <div className='cntr'>
                <div className='buttons'>
                    <Link style={{ textDecoration: 'none', color: '#3F51B5' }} to={{ pathname: '/' }}>
                        <div className='btn'>
                            <FavoriteIcon />
                            <div>Products</div>
                        </div>
                    </Link>

                    <Link style={{ textDecoration: 'none', color: '#3F51B5' }} to={{ pathname: '/cart' }}>
                        <div className='btn'>
                            <ShoppingCartIcon />
                            <div>My Cart</div>
                        </div>
                    </Link>
                </div>
            </div>

        );
    }
}

// SimpleBottomNavigation.propTypes = {
//     classes: PropTypes.object.isRequired,
// };

export default SimpleBottomNavigation;
