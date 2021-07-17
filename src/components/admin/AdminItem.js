import React from 'react';
import { useDispatch } from 'react-redux';

import { Link, useHistory } from 'react-router-dom';
import { deleteProduct } from '../../actions/productAction';


const AdminItem = ({item, index}) => {
    const history = useHistory();
    const dispatch = useDispatch();

    const handleUpdate = (id) => {
        history.push(`/admin/update/${id}`);
    }
    const handleDelete = async (id) => {
        const confirm = window.confirm(`Will you delete the ${item.name} ?`);
        if(confirm) {
            await dispatch(deleteProduct(id));
        }
    }
    const html = item ? 
        <tr>
            <td>{index}</td>
            <td>
                <Link to={`/admin:${item.id}`} className="link">
                    {item.name}
                </Link>
            </td>
            <td>{item.sku}</td>
            <td>{item.type}</td>
            <td className="tr">{item.price}</td>
            <td className="tc">{item.status}</td>
            <td width="1">
                <span
                    onClick={() => handleUpdate(item.id)}
                    className="text-warning pointer">
                        <i className="fas fa-pen"></i>
                </span>
            </td>
            <td width="1">
                <span
                    onClick={() => handleDelete(item.id)} 
                    className="text-danger pointer">
                    <i className="fas fa-trash"></i>
                </span>
            </td>
        </tr>
        : '';
    return html;
}

export default AdminItem;