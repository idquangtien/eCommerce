import React from 'react';
import TrCart from './TrCart';

const TableCart = ({carts}) => {
    const html = carts && carts.length > 0 ?
        <div className="table-container mt1rem">   
            <table className="table">
                <thead>
                    <tr>
                        <th colSpan="2">Name</th>
                        <th>Type</th>
                        <th>Price</th>
                        <th width="1">Quantity</th>
                        <th>Subtotal</th>
                        <th width="1"></th>
                    </tr>
                </thead>
                <tbody>
                    {carts.map((cart, index) => <TrCart key={index} cart={cart}/>)}
                </tbody>
            </table>
        </div>
        : <div className="mt1rem">There is no item</div>;
    return html;
}

export default TableCart;