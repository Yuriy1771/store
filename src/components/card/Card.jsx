import React, {useState} from 'react';
import classes from "./card.module.scss";

function Card(props) {

    const [isAdded, setAdded] = useState(false)

    const onPlus = () => {
        setAdded(!isAdded)
    }

    return (

        <div className={classes.card}>
            <img src='/imgs/productBlock/heart-unliked.svg' alt="unliked" className={classes.favorite}/>
            <div className={classes.tShirts}>
                <img src={props.picture} alt="product"/>
            </div>
            <h5>{props.name}</h5>
            <div className={classes.cardBottom}>
                <div className={classes.priceProduct}>
                    <span>Price:</span>
                    <b>{props.price} rub.</b>
                </div>
                <img src={isAdded ? '/imgs/productBlock/check-mark.svg' : '/imgs/productBlock/plus.svg'} alt="plus" className={classes.plusToCart}
                     onClick={onPlus}/>
            </div>
        </div>
    )
}

export default Card;