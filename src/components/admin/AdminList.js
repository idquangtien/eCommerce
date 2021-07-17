import React from 'react';
import AdminItem from './AdminItem';

const AdminList = ({list}) => {
    const html = list && list.length > 0 ? 
        list.map((item, index) => {
            return <AdminItem key={index} index={index + 1} item={item}/>;
        }) : 
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>;
    return (
        <table className="table">
            <thead>
                <tr>
                    <th width="1%">#</th>
                    <th>Name</th>
                    <th>Sku</th>
                    <th>Type</th>
                    <th className="">Price</th>
                    <th>Status</th>
                    <th colSpan="2">Actions</th>
                </tr>
            </thead>
            <tbody>{html}</tbody>
        </table>
    );
}

export default AdminList;