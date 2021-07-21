import React from 'react';

const SectionHero = ({title, desc, bg}) => {
    return (
        <section className="section section--hero" style={{backgroundImage: `url(${bg})`}}>
            <div className="container">
                <h1 className="page-title">{title}</h1>
                <div className="page-subtitle">{desc}</div>
            </div>
        </section>
    );
}
export default SectionHero;