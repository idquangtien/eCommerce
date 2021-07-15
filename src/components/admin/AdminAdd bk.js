import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { addProduct } from '../../actions/productAction';

const AdminAdd = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [sku, setSku] = useState("");
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [type, setType] = useState("");
    const [desc, setDesc] = useState("");
    const [status, setStatus] = useState("");

    const getSku = (e) => {
        setSku(e.target.value);
    }
    const getName = (e) => {
        setName(e.target.value);
    }
    const getPrice = (e) => {
        setPrice(e.target.value);
    }
    const getType = (e) => {
        setType(e.target.value);
    }
    const getDesc = (e) => {
        setDesc(e.target.value);
    }
    const getStatus = (e) => {
        setStatus(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const newProduct = {
            id: '0001',
            sku: sku ,
            name: name,
            price: price,
            type: type,
            status: status,
            desc: desc,
        }
        dispatch(addProduct(newProduct));

        let localProducts;
        if(localStorage.getItem("products")) {
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
                <h1 className="section__title tc">Create new product</h1>
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
                                        id="inputName"
                                        onChange={getName}
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
                                                id="inputSku"
                                                onChange={getSku}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-1 pl05rem">
                                    <div className="form-group">
                                        <label className="control-label">Type</label>
                                        <div className="input">
                                            <select className="form-control" 
                                                id="inputType"
                                                onChange={getType}
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
                                                id="inputPrice"
                                                onChange={getPrice}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-1 pl05rem">
                                    <div className="form-group ">
                                        <label className="control-label">Status</label>
                                        <div className="checkboxs checkboxs--inline" 
                                            id="inputStatus"
                                            onChange={getStatus.bind(this)}>
                                            <label className="checkbox">
                                                <input type="radio" name="status" value="inStock"/>
                                                <span></span>
                                                <span>In stock</span>
                                            </label>
                                            <label className="checkbox">
                                                <input type="radio" name="status" value="outOfStock"/>
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
                                        id="inputDesc"
                                        rows="3"
                                        onChange={getDesc}
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