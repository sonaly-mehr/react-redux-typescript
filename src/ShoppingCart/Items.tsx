import { Button } from '@material-ui/core';
import React from 'react';
import { CartItemType } from './ShoppingCart';
import '../ShoppingCart/shopping.css'

type Props = {
    item: CartItemType;
    handleAddToCart:(clickedItem: CartItemType) => void;
}

const Items: React.FC<Props> = ({item, handleAddToCart}) => {
    return (
        <div className='items'>
            <div className="item-wrapper">
            <img src={item.image} alt="" />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <h3>${item.price}</h3>
            <Button onClick={()=> handleAddToCart(item)}>Add To Cart</Button>
            </div>
        </div>
    );
};

export default Items;