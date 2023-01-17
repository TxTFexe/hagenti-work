import React from "react";

function Card({ id, title, number }) {
    return(
        <div className="ad">
            <h2>Работа</h2>
            <p>{title}</p>
            <div className="ad__number">
                {number}
            </div>
        </div>
    )}

export default Card;