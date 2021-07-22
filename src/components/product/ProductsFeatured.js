import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Product from './Product';

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import { getProductList } from '../../actions/productAction';
import 'swiper/swiper.scss';
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
// import "./Simple.css";



const ProductsFeatured = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.products.list);
    SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

    useEffect(() => {
        dispatch(getProductList())
    },[dispatch]);

        
        
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

export default ProductsFeatured;