import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const TrCart = ({cart}) => {
    const [quantity, setQuantity] = useState(1);

    const handleChangeQuantity = (e, id) => {
        setQuantity(e.target.value);
        
    }
    if(cart) {
        return (
            <tr >
                <td width="1" className="tc">
                    <img className="cart__image" 
                        src={`/img/${cart.img}`} 
                        alt={cart.name}
                    />
                </td>
                <td>
                    <Link to={`shop/${cart.id}`}
                        className="cart__name">{cart.name}</Link>
                    <div className="cart__sku">Sku: {cart.sku}</div>
                </td>
                <td>
                    <div className="cart__type">{cart.type}</div>
                </td>
                <td>
                    <div className="cart__price tr">
                        <span>đ</span>
                        <span>{cart.price}</span>
                    </div>
                </td>
                <td>
                    <div className="input">
                        <input type="number" 
                            className="form-control tr"
                            value={quantity}
                            onChange={(e) => handleChangeQuantity(e, cart.id)}
                        />
                    </div>
                </td>
                <td>
                    <div className="cart__subtotal tr text-primary b">
                        <span className="currency">đ</span>  
                        <span className="number">{parseInt(quantity) * parseInt(cart.price)}</span>
                    </div>
                </td>
                <td className="tc">
                    <span className="text-muted">
                        <i className="fas fa-times"/>
                    </span>
                </td>
            </tr>
        );
    } else {
        return '';
    }
}
const TableCart = ({carts}) => {
    const html = carts && carts.length > 0 ?
        <div className="table-container mt1rem">   
            <table className="table">
                <thead>
                    <tr>
                        <th colSpan="2">Name</th>
                        <th>Type</th>
                        <th>Price</th>
                        <th width="1">Quantity</th>
                        <th>Subtotal</th>
                        <th width="1"></th>
                    </tr>
                </thead>
                <tbody>
                    {carts.map((cart, index) => <TrCart key={index} cart={cart}/>)}
                </tbody>
            </table>
        </div>
        : <div className="mt1rem">There is no item</div>;
    return html;
}

export default TableCart;