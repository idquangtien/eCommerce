import React from 'react';
import SectionHero from './components/common/SectionHero';


const Account = () => {
    return (
        <React.Fragment>
            <SectionHero 
                title="Account" 
                desc="description"
                bg="./img/hero_1.jpeg"
            />
            <section className="section">
                <div className="container ph1rem">
                    <div className="section__body">
                        nothing to do
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}

export default Account;