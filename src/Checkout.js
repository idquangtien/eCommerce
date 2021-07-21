import React from 'react';
import SectionHero from './components/common/SectionHero';
const Checkout = () => {
    return (
        <React.Fragment>
            <SectionHero 
                title="Checkout" 
                desc="description"
                bg="../img/hero_1.jpeg"
            />
            <section className="section section--checkout"></section>
        </React.Fragment>
        
    );
}

export default Checkout;