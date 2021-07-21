import React from 'react';
import { useDispatch } from 'react-redux';
import { searchProduct } from '../../actions/productAction';

const FormSearch = () => {
    const dispatch = useDispatch();
    const handleSearch = (e) => {
        e.preventDefault();
        const dataSearch = e.target.querySelector("input").value || '';
        dispatch(searchProduct(dataSearch));
    }
    return (
        <form 
        className="form flex"
        onSubmit={handleSearch}>
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
    );
}

export default FormSearch;