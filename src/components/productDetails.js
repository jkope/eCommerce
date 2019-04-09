import React, { Component } from 'react';
import { connect } from 'react-redux';

// let product = {};

const mapStateToProps = (state) => {
    return { products: state.productList }
}


class ProductDetails extends Component {
    constructor(props) {
        super(props);
        this.id = Number(this.props.match.params.id);
        this.product = this.props.products.filter((obj) => {
            return obj.id === this.id;
        })[0];
    }

    render() {
        // console.log (this.product)
        return (
            <div>
                Product Details works
                <div>
                    {this.product.id}
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps)(ProductDetails);