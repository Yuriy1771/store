import React, {useEffect, useState} from 'react';
import classes from "./card.module.scss";
import {cartAPI, favoriteAPI} from "../../dall/api";

function Card(props) {
    let id = props.id
    let items = props.items

    const [isAdded, setAdded] = useState(false)
    const [isFavorite, setFavorite] = useState(props.favorited)

    const onClickPlus = (id, items) => {
        setAdded(!isAdded)
        onPlus({id}, items)
    }
    const onPlus = (id, items) => {
        props.onAddToCart(id, items)
    }


    const onClickFavorite = (id,items) => {
        setFavorite(!isFavorite)
        props.onAddToFavorite(id,items)
    }

    return (

        <div className={classes.card}>
            <img src={isFavorite ? '/imgs/productBlock/heart-liked.svg' : '/imgs/productBlock/heart-unliked.svg'}
                 alt="unliked" className={classes.favorite} onClick={() => onClickFavorite(id,items)}/>
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
                     onClick={() => onClickPlus(id, items)}/>
            </div>
        </div>
    )
}

export default Card;