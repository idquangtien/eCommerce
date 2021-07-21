import React, { useEffect } from 'react';
import AdminList from './components/admin/AdminList';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getProductList } from './actions/productAction';
import FormSearch from './components/common/FormSearch';
// import Alert from './components/common/Alert';

const Admin = () => {
    const dispatch = useDispatch();
    const inputSearch = useSelector(state => state.products.inputSearch || "");

    const list = useSelector(state => {
        return state.products.list.filter(i => i.name.includes(inputSearch))
    });

    
    const html = list.length > 0 ?
            <AdminList list={list}/>
            : <div className="pa05rem">There is no data</div>;
    
    useEffect(() => {
        
        dispatch(getProductList())
            .then(e => {
                
            });
    },[dispatch]);
    return (
        <section className="section">
            <div className="container">
                <div className="section__header">
                    <h1 className="h1">Product list</h1>
                </div>
                <div className="section__body">
                    <div className="filter">
                        <div className="filter__left">
                            <FormSearch />
                        </div>
                        <div className="filter__right">
                            <Link to="/admin/add"
                                className="btn btn--primary"
                            >
                                <i className="fas fa-plus"></i> 
                                <span className="ml05rem">Create new product</span>
                            </Link>
                        </div>
                    </div>
                    <div className="table-container mt1rem">
                        {html}
                        {/* <Alert 
                            active={true}
                            type="success"
                            title="Thành công rồi"
                            desc="Cập nhật thành công"
                            /> */}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Admin;