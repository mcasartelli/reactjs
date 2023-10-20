import React from "react";

import "./itemListContainer.css"
import Spinner from 'react-bootstrap/Spinner';


const ItemListContainer = ({mensaje}) => {
    return(
        <>
            <h1>{mensaje}</h1>
            <div className="loading">
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
        </>
    )
}

export default ItemListContainer;