import React, { Component } from 'react';
import ProductCard from './card';


const Cards = (props) => {
    const list = props.products.map((prod) =>
        <ProductCard 
            key={prod.id}
            id={prod.id} 
            title={prod.title} 
            description={prod.description} 
            img={prod.img}
            />);
    return (
        <div>
            {list}
        </div>
    );
}



export default Cards;