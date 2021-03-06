import React from 'react';
import ProductCard from './card';
import './gridList.css';



const Cards = (props) => {
    const list = props.products.map((prod) =>
        <ProductCard 
            className='card'
            key={prod.id}
            product={prod} 
            />);
    return (
        <div className='gridBody'>
            {list}
        </div>
    );
}



export default Cards;