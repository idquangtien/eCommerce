import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import { setCart } from '../../actions/cartAction';

const TrCart = ({cart}) => {
    const list =  useSelector(state => state.carts.list);
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();

    const handleChangeQuantity = (e, id) => {
        setQuantity(e.target.value); 

        const obj = _.find(list, {id: id});
        
        if(obj) {
            list.forEach(data => {
                if(data.id === id) {
                    data.quantity = e.target.value;
                }
            });
        } 
        dispatch(setCart(list));
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
                        <u>đ</u>
                        <span>{cart.price}</span>
                    </div>
                </td>
                <td>
                    <div className="input">
                        <input type="number" 
                            className="form-control tr"
                            value={cart.quantity}
                            onChange={(e) => handleChangeQuantity(e, cart.id)}
                        />
                    </div>
                </td>
                <td>
                    <div className="cart__subtotal tr text-primary b">
                        <u className="currency">đ</u>  
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

export default TrCart;