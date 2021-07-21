import React from 'react';
import { parse } from 'uuid';

import SectionHero from '../common/SectionHero';
import TableCart from './TableCart';


const ShoppingCart = () => {
    const carts = JSON.parse(localStorage.getItem("carts")) || [];
    let subtotal = 0;
    console.log('carts', carts);
    if(carts && carts.length > 0) {
        carts.forEach(cart => {
            subtotal += (parseInt(cart.price) * parseInt(cart.quantity))
        })
    } 
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
                            <h2 className="h2">Your cart</h2>
                            <TableCart carts={carts}/>
                        </div>
                        <div className="shopping-cart__right">
                            <h2 className="h2">Summary</h2>
                            <div className="summary mt1rem">
                                <div className="summary__row">
                                    <div className="summary__label">Subsummary</div>
                                    <div className="summary__number">
                                        <span>đ</span>
                                        <span>{subtotal}</span>
                                    </div>
                                </div>
                                <div className="summary__row">
                                    <div className="summary__label">Subsummary</div>
                                    <div className="summary__number">đ0.00</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}
export default ShoppingCart;