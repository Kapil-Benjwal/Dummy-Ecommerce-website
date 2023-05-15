import React from 'react';
import { useContext } from 'react';
import { UserContext } from './WebParent';


const Cart = () => {
    const { removeData, total, UpdateQuantity, filterCartdata } = useContext(UserContext);


    return (
        <>
            <div className='productsWrapper mt-4'>
                {filterCartdata.map((cartItem) => (
                    <div className='card' key={cartItem.id}>
                        <img src={cartItem.image} alt="" />
                        <h4>{cartItem.title}</h4>
                        <h5>Price: {cartItem.price}</h5>
                        <div className='m-auto '>
                            <div>
                                <h2>Quantity :
                                    <span className='mt-2 m-2 fs-5'>
                                        <select className='px-4 p-1 rounded' value={cartItem.quantity} onChange={(e) => UpdateQuantity(cartItem.id, e.target.value, cartItem.price)}>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                        </select>
                                    </span>
                                </h2>
                                <div className='mt-3'>
                                    <h2>Total :  {cartItem.amount ? cartItem.amount : cartItem.price} </h2>
                                </div>
                            </div>
                            <button className='btn btn-success mt-2 w-100' onClick={() => { removeData(cartItem.id) }}>Delete</button>
                        </div>
                    </div>
                ))}
            </div>{
                total ? <div style={{ padding: "10px", marginTop: "20px", width: "100%", border: "2px solid gray", borderRadius: "5px" }}><h3>Total Amount: {total.toFixed(2)}</h3></div> : <h4 style={{ justifyContent: 'center', marginLeft: '40%' }}>Your Cart is Empty</h4>
            }
        </>
    )
}

export default Cart