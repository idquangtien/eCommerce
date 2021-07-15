import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory, useParams } from 'react-router-dom';
import { updateProduct } from '../../actions/productAction';

const AdminUpdate = () => {
    const { id } = useParams();
    let dataLocal = [];
    let item = {};

    
    if(localStorage.getItem("products")) {
        dataLocal = JSON.parse(localStorage.getItem("products"));
        if(dataLocal.length > 0) {
            dataLocal.forEach(i => {
                if((i.id).toString() === id.toString()) {
                    item = i;
                }
            })
        }
    }
    
    const history = useHistory();
    const dispatch = useDispatch();
    
    const [dataUpdate, setDataUpdate] = useState({
        ...item
    });
    const { sku, name, type, price, status, desc } = dataUpdate;
    const handleChangeInput = (e, name) => {
        setDataUpdate({
            ...dataUpdate,
            [name]: e.target.value
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        
        // update store
        dispatch(updateProduct(dataUpdate));

        // update local storage
        if(localStorage.getItem("products")) {
            dataLocal = JSON.parse(localStorage.getItem("products"));
            if(dataLocal.length > 0) {
                dataLocal.forEach(i => {
                    if((i.id).toString() === id.toString()) {
                        i.sku = sku;
                        i.name = name;
                        i.type = type;
                        i.price = price;
                        i.status = status;
                        i.desc = desc;
                    }
                })
            }
        }
        localStorage.setItem("products", JSON.stringify(dataLocal));

        // direction list
        history.push('/admin');
    }
    return (
        <section className="section">
            <div className="container">
            <div className="section__header">
                <h1 className="section__title tc">Update product</h1>
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
                                        onChange={e => handleChangeInput(e, 'name')}
                                        value={name}
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
                                                onChange={e => handleChangeInput(e, 'sku')}
                                                defaultValue={sku}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-1 pl05rem">
                                    <div className="form-group">
                                        <label className="control-label">Type</label>
                                        <div className="input">
                                            <select className="form-control" 
                                                onChange={e => handleChangeInput(e, 'type')}
                                                defaultValue={type}
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
                                                onChange={e => handleChangeInput(e, 'price')}
                                                defaultValue={price}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-1 pl05rem">
                                    <div className="form-group ">
                                        <label className="control-label">Status</label>
                                        <div className="checkboxs checkboxs--inline" 
                                            onChange={e => handleChangeInput(e, 'status')}
                                            >
                                            <label className="checkbox">
                                                <input type="radio" 
                                                    name="status" 
                                                    value="inStock"
                                                    defaultChecked={status === "inStock"}
                                                />
                                                <span></span>
                                                <span>In stock</span>
                                            </label>
                                            <label className="checkbox">
                                                <input type="radio" 
                                                    name="status" 
                                                    value="outOfStock"
                                                    defaultChecked={status === "outOfStock"}
                                                />
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
                                        onChange={e => handleChangeInput(e, 'desc')}
                                        defaultValue={desc}
                                    >   
                                    </textarea>
                                </div>
                            </div>
                        </div>
                        <div className="form__footer mt1rem">
                            <Link to="/admin" className="btn btn--secondary">Back</Link>
                            <button type="submit" className="btn btn--primary">
                                Update product
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
export default AdminUpdate;