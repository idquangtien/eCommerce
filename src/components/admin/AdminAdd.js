import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { addProduct } from '../../actions/productAction';
import { v4 as uuidv4 } from 'uuid';

const AdminAdd = () => {

    const dispatch = useDispatch();
    const history = useHistory();

    const [newProduct, setNewProduct] = useState({
        id: uuidv4(),
        sku: "",
        name: "",
        price: 0,
        type: "",
        desc: "",
        status: "",
    });
    const handleChangeInput = (e, name) => {
        setNewProduct({
            ...newProduct,
            [name]: e.target.value
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addProduct(newProduct));

        let localProducts;
        if (localStorage.getItem("products")) {
            localProducts = JSON.parse(localStorage.getItem("products"));
        } else {
            localProducts = [];
        }
        localProducts.push(newProduct);
        localStorage.setItem("products", JSON.stringify(localProducts));

        history.push("/admin");
    }
    return (
        <section className="section">
            <div className="container">
                <div className="section__header">
                    <h1 className="section__title tc">Add product</h1>
                </div>
                <div className="section__body">
                    <form className="form w-50 mh-auto" onSubmit={handleSubmit}>
                        <div className="form__body">
                            <div className="form-group mt1rem">
                                <label className="control-label">Name</label>
                                <div className="input">
                                    <input
                                        type="text"
                                        className="form-control"
                                        onChange={(e) => handleChangeInput(e, "name")}
                                    />
                                </div>
                            </div>
                            <div className="flex mt1rem">
                                <div className="flex-1 pr05rem">
                                    <div className="form-group">
                                        <label className="control-label">Sku</label>
                                        <div className="input">
                                            <input
                                                type="text"
                                                className="form-control"
                                                onChange={(e) => handleChangeInput(e, "sku")}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-1 pl05rem">
                                    <div className="form-group">
                                        <label className="control-label">Type</label>
                                        <div className="input">
                                            <select className="form-control"
                                                onChange={(e) => handleChangeInput(e, "type")}
                                            >
                                                <option value="">Select type</option>
                                                <option value="long">Long</option>
                                                <option value="short">Short</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex mt1rem">
                                <div className="flex-1 pr05rem">
                                    <div className="form-group">
                                        <label className="control-label">Price</label>
                                        <div className="input" >
                                            <input
                                                type="number"
                                                className="form-control"
                                                onChange={(e) => handleChangeInput(e, "price")}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-1 pl05rem">
                                    <div className="form-group ">
                                        <label className="control-label">Status</label>
                                        <div className="checkboxs checkboxs--inline"
                                            onChange={(e) => handleChangeInput(e, "status")}
                                        >
                                            <label className="checkbox">
                                                <input type="radio" name="status" value="inStock" />
                                                <span></span>
                                                <span>In stock</span>
                                            </label>
                                            <label className="checkbox">
                                                <input type="radio" name="status" value="outOfStock" />
                                                <span></span>
                                                <span>Out of stock</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="form-group mt1rem">
                                <label className="control-label">Description</label>
                                <div className="textarea">
                                    <textarea
                                        className="form-control"
                                        rows="3"
                                        onChange={(e) => handleChangeInput(e, "desc")}
                                    >
                                    </textarea>
                                </div>
                            </div>
                        </div>
                        <div className="form__footer mt1rem">
                            <button type="submit" className="btn btn--primary">
                                Create new product
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
export default AdminAdd;