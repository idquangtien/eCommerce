import React from 'react';
import SectionHero from './components/common/SectionHero';
import {Link} from 'react-router-dom';

const Checkout = () => {
    const carts = JSON.parse(localStorage.getItem("carts")) || [];
    const shippingFee = 0;
    let subtotal = 0;
    if(carts && carts.length > 0) {
        carts.forEach(cart => {
            console.log(parseInt(cart.price), parseInt(cart.quantity));
            subtotal += (parseInt(cart.price) * parseInt(cart.quantity));
            console.log('subtotal',subtotal);
        })
    } 
    return (
        <React.Fragment>
            <SectionHero 
                title="Checkout" 
                desc="description"
                bg="../img/hero_1.jpeg"
            />
            <section className="section section--checkout">
                <div className="container container--960px">
                    <form className="form mt1rem ">
                        <div className="form__body">
                            <div className="flex">
                                <div className="flex-2">
                                    <h2 className="h2 ttu">
                                        Personal details
                                    </h2>
                                    <div className="text-muted b">Please enter your shipping details</div>
                                </div>
                                <div className="flex-3 ml2rem">
                                    <div className="flex">
                                        <div className="flex-1 mr1rem">
                                            <label className="form-group">
                                                <div className="control-label">Họ Tên <sup className="text-danger">*</sup></div>
                                                <div className="input">
                                                    <input type="text" 
                                                        className="form-control"
                                                        placeholder="Enter your fullname"
                                                    />
                                                </div>
                                            </label>
                                        </div>
                                        <div className="flex-1 ml1rem">
                                            <label className="form-group">
                                                <div className="control-label">Số điện thoại <sup className="text-danger">*</sup></div>
                                                <div className="input">
                                                    <input type="text" 
                                                        className="form-control"
                                                        placeholder="Enter your phone"
                                                    />
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                    <label className="form-group mt1rem">
                                        <div className="control-label">Address <sup className="text-danger">*</sup></div>
                                        <div className="input">
                                            <textarea 
                                                className="form-control"
                                                placeholder="Enter your address"
                                            />
                                        </div>
                                    </label>
                                    <div className="w-50 mt1rem">
                                        <button type="submit" className="btn btn--primary btn--block ">
                                            Pay now
                                        </button>
                                    </div>
                                </div>
                            </div>
                            
                            
                            
                        </div>
                    </form>
                </div>
            </section>
        </React.Fragment>
        
    );
}

export default Checkout;