import React from 'react';
import './Alert.css';

const types = {
    success: {
        type: "success",
        icon: <i className="far fa-smile-wink"></i>
    },
    danger: {
        type: "danger",
        icon: <i className="far fa-dizzy"></i>
    },
    warning: {
        type: "warning",
        icon: <i className="far fa-frown"></i>
    },
    info: {
        type: "info",
        icon: <i className="far fa-smile"></i>
    }
}
const Alert = ({ 
    active=false, 
    type="info", 
    icon=<i class="far fa-smile-beam"></i>, 
    title="Success", 
    desc="Content alert" }) => {

    return (
        <div className={`alert ${active ? 'active': ''} alert--${type}`}>
            <div className="alert__icon">
                <div className="icon">{types[type].icon}</div>
            </div>
            <div className="alert__content">
                <h4 className="h4">{title}</h4>
                <div>{desc}</div>
            </div>
            <div className="alert__close pointer">
                <i className="fas fa-times"></i>
            </div>
        </div>
    );
}
export default Alert;