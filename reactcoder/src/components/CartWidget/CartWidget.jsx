import React from 'react';
import { BsCart3 } from "react-icons/bs";
import Badge from 'react-bootstrap/Badge';

const CartWidget = () => {
    return (
        <div>
            <BsCart3/> <Badge bg="secondary">0</Badge>
        </div>
    );
};

export default CartWidget;