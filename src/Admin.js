import React, { useEffect } from 'react';
import AdminList from './components/admin/AdminList';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getProductList, searchProduct } from './actions/productAction';
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


    const handleSearch = (e) => {
        e.preventDefault();
        const dataSearch = e.target.querySelector("input").value || '';
        dispatch(searchProduct(dataSearch));
    }
    
    useEffect(() => {
        dispatch(getProductList())
            .then(e => console.log(e));
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
                            <form 
                                className="form flex"
                                onSubmit={handleSearch}
                            >
                                <div className="input input--icon">
                                    <input type="text" 
                                        name="inputName"
                                        className="form-control"
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