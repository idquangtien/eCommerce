import React from 'react';
import ProductList from './components/product/ProductList';
import SectionHero from './components/common/SectionHero';

const Favorite = () => {
    const list = JSON.parse(localStorage.getItem("carts")) || [];
    
    return (
        <React.Fragment>
            <SectionHero 
                title="Favorite" 
                desc="description"
                bg="./img/hero_1.jpeg"
            />
            <section className="section">
                <div className="container">
                    <div className="section__body">
                        
                        <ProductList list={list}/>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}

export default Favorite;