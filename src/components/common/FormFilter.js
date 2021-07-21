import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterByType, sortProduct } from '../../actions/productAction';

const FormFilter = ({ className, length }) => {
    const dispatch = useDispatch();
    
    const [type, setType] = useState("");

    const [sort, setSort] = useState({});


    const handleSubmit = async (e) => {
        e.preventDefault();
        await dispatch(filterByType(type));
        await dispatch(sortProduct(sort));
    }
    const handleReset = async () => {
        await dispatch(filterByType(""));
        await dispatch(sortProduct({
            key: "",
            value: 0
        }));
    }
    const handleSortBy = (key) => {
        setSort({
            ...sort,
            key: key,
        });
    }
    const handleSortValue = (value) => {
        setSort({
            ...sort,
            value: value
        });
    }
    return (
        <section className="section section--filter">
            <div className="container">
                <form className={`filter flex-middle ${className}`} onSubmit={handleSubmit}>
                    <div className="filter__left flex flex-middle">
                        <span className="">Type</span>
                        <div className="type ml1rem">
                            <label className="select">
                                <select className="form-control"
                                    onChange={(e) => setType(e.target.value)}
                                    value={type}
                                >
                                    <option value="">All type</option>
                                    <option value="long">Long</option>
                                    <option value="short">Short</option>
                                </select>
                            </label>
                        </div>
                        <div className="sort flex flex-middle ml2rem">
                            <span className="">Sort by</span>
                            <div className="input-group">
                                <div className="input-group__left">
                                    <label className="select sortby ml1rem">
                                        <select className="form-control"
                                            onChange={(e) => handleSortBy(e.target.value)}
                                        >
                                            <option value="">all</option>
                                            <option value="name">Name</option>
                                            <option value="price">Price</option>
                                        </select>
                                    </label>
                                </div>
                                <div className="input-group__right">
                                    <label className="select sortValue">
                                        <select className="form-control"
                                            onChange={(e) => handleSortValue(e.target.value)}
                                        >
                                            <option value={0}>Sort all</option>
                                            <option value={1}>Lowest-Highest</option>
                                            <option value={-1}>Highest-Lowest</option>
                                        </select>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="btns ml2rem">
                            <button type="submit" className="btn btn--primary">Search</button>
                            <button type="reset"
                                onClick={handleReset}
                                className="btn btn--secondary"
                            >Reset</button>
                        </div>
                    </div>
                    <div className="filter__right">{length} (items)</div>
                </form>
            </div>
        </section>
    );
}

export default FormFilter;