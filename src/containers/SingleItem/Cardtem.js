import React from 'react';
import {Link} from "react-router-dom";

// Css Files
import '../../css/carditem.css';

export default function Carditem(props) {

    return(
        <>
        <Link to="/" className="card-item">
            <div className="card-img-bx">
                <img className="card-img" src={props.src} alt="Card Name" />
            </div>
            <div className="card-details-bx">
                <div className="cdb-name-other">{props.cno}</div>
            </div>
        </Link>
        </>
    )
}