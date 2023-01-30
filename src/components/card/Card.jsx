import React from 'react';
import classes from "./card.module.scss";

function Card(props) {
    return (

        <div className={classes.card}>
            <img src='/imgs/productBlock/heart-unliked.svg' alt="unliked" className={classes.favorite}/>
            <div className={classes.tShirts}>
                <img src='/imgs/t-shirts/1.png' alt="product"/>
            </div>
            <h5>T-SHIRT ROUND NECK SS MONSTERS WITH CRYSTALS</h5>
            <div className={classes.cardBottom}>
                <div className={classes.priceProduct}>
                    <span>Price:</span>
                    <b>6 450 rub.</b>
                </div>
                <button>
                    <img src='/imgs/content/addTshirt.png' alt="plus"/>
                </button>
            </div>
        </div>
    )
}

export default Card;