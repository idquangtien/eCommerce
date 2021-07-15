import React, { useEffect } from 'react';
import AdminList from './components/admin/AdminList';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getProductList } from './actions/productAction';

const Admin = () => {
    const list = useSelector(state => state.products.list);
    const dispatch = useDispatch();
    const html = list.length > 0 ?
            <AdminList list={list}/>
            : 'There is no data';
    useEffect(() => {
        dispatch(getProductList());
    },[]);
    return (
        <section className="section">
            <div className="container">
                <div className="section__header">
                    <h1>Product list</h1>
                </div>
                <div className="section__body">
                    <div className="filter">
                        <div className="filter__left">
                            <form 
                                className="form flex"
                            >
                                <div className="input input--icon">
                                    <input type="text" 
                                        className="form-control"
                                        id="inputTextSearch"
                                        placeholder="Fitler name"
                                    />
                                    <span className="icon">
                                        <i className="fas fa-search"></i>
                                    </span>
                                </div>
                                <button 
                                    type="submit"
                                    className="btn btn--secondary ml1rem"
                                >
                                    Search
                                </button>
                            </form>
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
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Admin;