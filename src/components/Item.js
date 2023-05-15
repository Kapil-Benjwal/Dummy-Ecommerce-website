import React from 'react';
import { useContext } from 'react';
import { UserContext } from './WebParent';


const Item = () => {
    const { addCart, filterProduct } = useContext(UserContext);


    return (

        <div className='productsWrapper  p-5'>
            {filterProduct.map((product) => (
                <div className='card' key={product.id}>
                    <img src={product.image} alt="" />
                    <h4>{product.title}</h4>
                    <h5>Price: {product.price}</h5>
                    <button className='btn' onClick={() => addCart(product.id)}>Add to cart</button>
                </div>
            ))}
        </div>
    )
}

export default Item