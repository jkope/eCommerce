import React from 'react';
import { Switch, Route } from 'react-router-dom'
import propductList from './propductList';
import CartList from './cartList';
import ProductDetails from './productDetails';


function Outlet() {
    return (
        <main>
            <Switch>
                <Route exact path='/' component={propductList} />
                <Route path='/productdetails/:id' component={ProductDetails} />
                <Route path='/cart' component={CartList} />
            </Switch>
        </main>
    );
}

export default Outlet;
