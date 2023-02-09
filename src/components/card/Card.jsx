import React, {useEffect, useState} from 'react';
import classes from "./card.module.scss";
import {cartAPI, favoriteAPI} from "../../dall/api";

function Card(props) {
    let id = props.id
    let item = props.items

    const [isAdded, setAdded] = useState(props.isAdded)
    const [isFavorite, setFavorite] = useState(props.favorited)

    const onClickPlus = (item) => {
        setAdded(!isAdded)
        onPlus(item)
    }
    const onPlus = (item) => {
        props.onAddToCart( item)
    }


    const onClickFavorite = (item) => {
        setFavorite(!isFavorite)
        props.onAddToFavorite(item)
    }

    return (

        <div className={classes.card}>
            <img src={isFavorite ? '/imgs/productBlock/heart-liked.svg' : '/imgs/productBlock/heart-unliked.svg'}
                 alt="unliked" className={classes.favorite} onClick={() => onClickFavorite(item)}/>
            <div className={classes.tShirts}>
                <img src={props.items.picture} alt="product"/>
            </div>
            <h5>{props.items.name}</h5>
            <div className={classes.cardBottom}>
                <div className={classes.priceProduct}>
                    <span>Price:</span>
                    <b>{props.items.price} rub.</b>
                </div>
                <img src={isAdded ? '/imgs/productBlock/check-mark.svg' : '/imgs/productBlock/plus.svg'} alt="plus"
                     className={classes.plusToCart}
                     onClick={() => onClickPlus(item)}/>
            </div>
        </div>
    )
}

export default Card;