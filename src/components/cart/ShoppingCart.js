import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCart } from '../../actions/cartAction';

import SectionHero from '../common/SectionHero';
import SummaryCart from './SummaryCart';
import TableCart from './TableCart';


const ShoppingCart = () => {
    const dispatch = useDispatch();
    let cartLocal = JSON.parse(localStorage.getItem("carts")) || [];
    const carts = useSelector(state => state.carts.list);

    useEffect(() => {
        dispatch(setCart(cartLocal));
    },[dispatch]);
    return (
        <React.Fragment>
            <SectionHero 
                title="Shopping cart" 
                desc="description"
                bg="../img/hero_1.jpeg"
            />
            <section className="section section--shopping-cart">
                <div className="container">
                    <div className="shopping-cart">
                        <div className="shopping-cart__left">
                            <div className="flex flex-middle">
                                <h2 className="h2">Your cart</h2>
                                <div className="ml1rem">{carts.length || 0} item(s)</div>
                            </div>
                            <TableCart carts={carts}/>
                        </div>
                        <div className="shopping-cart__right">
                            <h2 className="h2">Summary</h2>
                            <SummaryCart carts={carts}/>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}
export default ShoppingCart;