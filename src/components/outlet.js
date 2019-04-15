import React from 'react';
import { Switch, Route } from 'react-router-dom'
import propductList from './propductList';
import CartList from './cartList';
import ProductDetails from './productDetails';
import CheckedOut from './checkout';


function Outlet() {
    return (
        <main>
            <Switch>
                <Route exact path='/' component={propductList} />
                <Route path='/productdetails/:id' component={ProductDetails} />
                <Route path='/cart' component={CartList} />
                <Route path='/checkedOut' component={CheckedOut} />
                <Route component={propductList} />
            </Switch>
        </main>
    );
}

export default Outlet;
