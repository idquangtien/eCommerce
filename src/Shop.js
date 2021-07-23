import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductList from './components/product/ProductList';
import { getProductList } from './actions/productAction';
import FormFilter from './components/common/FormFilter';
import SectionHero from './components/common/SectionHero';




const Shop = () => {
    const filterByType = useSelector(state => state.products.filterByType || "");
    const sort = useSelector(state => state.products.sort || {});
    const list = useSelector(state => {
        let listFilter = state.products.list.filter(i => {
            return i.type.includes(filterByType) 
        }) || [];

        if(sort.key === "name") {
            if(sort.value === "1") {
                listFilter.sort((a,b) => {
                    if(a.name.toLowerCase() < b.name.toLowerCase())
                        return -1;
                    return 0;
                });
            } else if(sort.value === "-1") {
                listFilter.sort((a,b) => {
                    if(a.name.toLowerCase() > b.name.toLowerCase())
                        return -1;
                    return 0;
                });
            }
        } else if(sort.key === "price") {
            if(sort.value === "1") {
                listFilter.sort((a,b) => {
                    if(parseInt(a.price) < parseInt(b.price)) {
                        return -1;
                    }
                    return 0;
                })
            } else if(sort.value === "-1"){
                listFilter.sort((a,b) => {
                    if(parseInt(a.price) > parseInt(b.price)) {
                        return -1;
                    }
                    return 0;
                })
            }
        }
        
        return listFilter;
    });
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProductList());
    },[dispatch]);
    return (
        <React.Fragment>
            <div className="loading active">
            </div>
            <SectionHero 
                title="Shop page" 
                desc="description"
                bg="./img/hero_1.jpeg"
            />
            <FormFilter length={list.length}/>
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

export default Shop;