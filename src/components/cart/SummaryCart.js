// import React from "react";
// import { Link } from "react-router-dom";
// import { connect } from "react-redux";

// class SummaryCart extends React.Component {
//     componentDidMount() {
//     }
//     render(){
//         const carts = this.props.carts.list || [];
//         const shippingFee = 0;
//         let subtotal = 0;
//         carts.forEach(cart => {
//             subtotal += parseInt(cart.price * cart.quantity)
//         });
//         return (
//             <React.Fragment>
//                 <div className="summary mt1rem">
//                     <div className="summary__body">
//                         <div className="summary__row flex flex-between">
//                             <div className="summary__label text-gray">Subtotal</div>
//                             <div className="summary__number">
//                                 <u>đ</u>
//                                 <span>{subtotal}</span>
//                             </div>
//                         </div>
//                         <div className="summary__row flex flex-between mt1rem">
//                             <div className="summary__label text-gray">Shipping fee</div>
//                             <div className="summary__number">
//                                 <u>đ</u>
//                                 <span>{shippingFee}</span>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="summary__footer">
//                         <div className="summary__row  flex flex-between flex-middle">
//                             <div className="summary__label">
//                                 <span>Total</span>
//                             </div>
//                             <div className="h3 b summary__number">
//                                 <u>đ</u>
//                                 <span>{subtotal + shippingFee}</span>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <Link to="./checkout"
//                     className="btn btn--primary btn--block mt1rem"
//                 >
//                     checkout
//                 </Link>
//             </React.Fragment>
//         );
//     }
// }
// const mapStateToProps = (state) => ({
//     carts: state.carts
// })
// const mapDispatchToProps = {
// }

// export default connect(mapStateToProps, mapDispatchToProps)(SummaryCart)


import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const Component = () => {
    const history = useHistory();
    const cartsReducer = useSelector((state) => state.carts);
    const carts = cartsReducer.list || [];
    let shippingFee = 0;
    let subtotal = 0;
    if (carts && carts.length > 0) {
        carts.forEach((cart) => {
            console.log(parseInt(cart.price), parseInt(cart.quantity));
            subtotal += parseInt(cart.price) * parseInt(cart.quantity);
            console.log("subtotal", subtotal);
        });
    }

    return (
        <React.Fragment>
            <div className="summary mt1rem">
                <div className="summary__body">
                    <div className="summary__row flex flex-between">
                        <div className="summary__label text-gray">Subtotal</div>
                        <div className="summary__number">
                            <u>đ</u>
                            <span>{subtotal}</span>
                        </div>
                    </div>
                    <div className="summary__row flex flex-between mt1rem">
                        <div className="summary__label text-gray">Shipping fee</div>
                        <div className="summary__number">
                            <u>đ</u>
                            <span>{shippingFee}</span>
                        </div>
                    </div>
                </div>
                <div className="summary__footer">
                    <div className="summary__row  flex flex-between flex-middle">
                        <div className="summary__label">
                            <span>Total</span>
                        </div>
                        <div className="h3 b summary__number">
                            <u>đ</u>
                            <span>{subtotal + shippingFee}</span>
                        </div>
                    </div>
                </div>
            </div>
            <button
                type="button"
                onClick={() => history.push("./checkout")}
                className="btn btn--primary btn--block mt1rem"
            >
                checkout
            </button>
        </React.Fragment>
    );
};

// const SummaryCart = connect((state) => ({
//     carts: state.carts,
// }))(Component);

export default Component;

