import { CircularProgress, Grid } from '@material-ui/core';
import React from 'react';
import { useQuery } from 'react-query';
import Items from './Items';
import '../ShoppingCart/shopping.css'

export type CartItemType = {
    id: number,
    category: string,
    description: string,
    image: string,
    price: number,
    title: string,
    amount: number
}
const getProducts = async (): Promise<CartItemType[]> =>
    await (await fetch('https://fakestoreapi.com/products')).json();

const ShoppingCart = () => {
    const { data, isLoading, error } = useQuery<CartItemType[]>(
        'products',
        getProducts
    )
    console.log(data)

    const getTotalItems = () => null;
    const handleAddToCart = (clickedItem: CartItemType) => null;
    const handleRemoveFromCart = () => null;

    if (isLoading) return <CircularProgress style={{marginLeft: '50%', marginTop: '5%'}}/>
    if (error) return <div>Something went wrong...</div>

    return (
        <Grid container spacing={3} className="item-container">
            {data?.map(item=> (
                <Grid item key={item.id} xs={12} sm={4}>
                    <Items item={item} handleAddToCart={handleAddToCart}/>
                </Grid>
            ))}
        </Grid>
    );
};

export default ShoppingCart;