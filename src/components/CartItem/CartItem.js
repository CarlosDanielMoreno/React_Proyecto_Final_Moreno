import { CartContext } from '../Context/cartContext';
import React from 'react';
import { useContext } from 'react';




const CartItem = ({id, price, name, quantity }) => {
    const { removeItem} = useContext(CartContext)

    return (
        <div className=''>
        
        <div></div>
        
        
            <div className='is-flex m-auto pt-5 title is-3'>
                <div className='pl-4 '>
                <h2>
                    {name}
                </h2>
                </div >
                <div className='pl-4'>
                <p>
                    Cantidad: {quantity}
                </p>
                </div>
                <div className='pl-4'>
                <p>
                    Subtotal: {quantity * price}
                </p>
                </div>
                <button  className='button is-danger is-rounded' onClick={() => removeItem(id)}>Eliminar</button>
                
            </div>
        </div>

    )
};

export default CartItem;
