import React from 'react';
import { connect } from 'react-redux';
import Product from './Product';

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import { getProductList } from '../../actions/productAction';
import 'swiper/swiper.scss';
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
// import "./Simple.css";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

class ProductsFeatured extends React.Component {
    componentDidMount() {
        this.props.getProductList();
    }   
    render(){
        const products = this.props.products;
        return (
            <React.Fragment>
                <Swiper
                    spaceBetween={32}
                    slidesPerView={5}
                    navigation
                    pagination={{ clickable: true }}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    {
                        products && products.length > 0 &&
                        products.map((product, index) => 
                            <SwiperSlide key={index}>
                                <Product item={product}/>
                            </SwiperSlide>
                        )
                    }
                </Swiper>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => ({
    products: state.products.list
});
const mapDispatchToProps = {
    getProductList
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsFeatured);