import React from 'react';
import SectionHero from './components/common/SectionHero';
import ProductsFeatured from './components/product/ProductsFeatured';


const Home = () => {
    return (
        <React.Fragment>
            <SectionHero 
                title="Home page" 
                desc="description"
                bg="./img/hero_1.jpeg"
            />
            <section className="section">
                <div className="container ph1rem">
                    <div className="section__body">
                        <ProductsFeatured />
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}

export default Home;