import React, {useEffect, useState} from 'react';
import classes from "./card.module.scss";
import {cartAPI, favoriteAPI} from "../../dall/api";

function Card({price, picture, id, favorite, name, setCartItems, setFavorites,items}) {

    const [isAdded, setAdded] = useState(false)
    const [isFavorite, setFavorite] = useState(false)
    const onClickPlus = (props) => {
        setAdded(!isAdded)
        onPlus({id})
    }
    const onPlus = (data) => {
        onAddToCart(data)
    }
    const onAddToCart = (data) => {
        cartAPI.addToCart(data).then(data => data.data)
        setCartItems(prev => [...prev, data])
    }

    const onFavorite = (items) => {
        setFavorite(!isFavorite)
        favoriteAPI.favoriteApi(items);
        setFavorites((prev) => [...prev, items])
    }

    return (

        <div className={classes.card}>
            <img src={isFavorite ? '/imgs/productBlock/heart-liked.svg' : '/imgs/productBlock/heart-unliked.svg'}
                 alt="unliked" className={classes.favorite} onClick={() => onFavorite(items)}/>
            <div className={classes.tShirts}>
                <img src={picture} alt="product"/>
            </div>
            <h5>{name}</h5>
            <div className={classes.cardBottom}>
                <div className={classes.priceProduct}>
                    <span>Price:</span>
                    <b>{price} rub.</b>
                </div>
                <img src={isAdded ? '/imgs/productBlock/check-mark.svg' : '/imgs/productBlock/plus.svg'} alt="plus"
                     className={classes.plusToCart}
                     onClick={onClickPlus}/>
            </div>
        </div>
    )
}

export default Card;