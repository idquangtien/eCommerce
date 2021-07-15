import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductList from './components/product/ProductList';
import { getProductList } from './actions/productAction';



const Shop = () => {
    const list = useSelector(state => state.products.list);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProductList());
        console.log('shop list',list);
    },[]);
    return (
        <section className="section">
            <div className="container ph1rem">
                <div className="section__header">
                    <h1 className="section__title tc">Shop page</h1>
                </div>
                <div className="section__body">
                    <ProductList list={list}/>
                </div>
            </div>
        </section>
    );
}

export default Shop;