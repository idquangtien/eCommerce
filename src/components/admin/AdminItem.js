import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { getProductItem } from '../../actions/productAction';


const CellProduct = ({item, index}) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const handleUpdate = async (id) => {
        await dispatch(getProductItem(id));
        history.push(`/admin/update/${id}`);
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
                    className="text-warning">
                        <i className="fas fa-pen"></i>
                </span>
            </td>
            <td width="1">
                <span className="text-danger pointer">
                    <i className="fas fa-trash"></i>
                </span>
            </td>
        </tr>
        : '';
    return html;
}

export default CellProduct;