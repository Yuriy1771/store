import React, {useEffect, useState} from 'react';
import classes from "./card.module.scss";
import {cartAPI, favoriteAPI} from "../../dall/api";

function Card(props) {

    const [isAdded, setAdded] = useState(false)
    const [isFavorite, setFavorite] = useState(props.favorited)
    let id = props.id;

    const onClickPlus = () => {
        setAdded(!isAdded)
        onAddToCart({id})
        // onPlus({price, picture, id, name})
    }

    const onAddToCart = (data) => {
        cartAPI.addToCart(data).then(data => data.data)
        props.setCartItems(prev => [...prev, data])
    }
    const onClickFavorite = () => {
        onFavorite({id})
    }

    const onFavorite = (data) => {
        setFavorite(!isFavorite)
        favoriteAPI.favoriteApi(data);
        props.setFavorites((prev) => [...prev, props.items])
    }
    return (

        <div className={classes.card}>
            <img src={isFavorite ? '/imgs/productBlock/heart-liked.svg' : '/imgs/productBlock/heart-unliked.svg'}
                 alt="unliked" className={classes.favorite} onClick={onClickFavorite}/>
            <div className={classes.tShirts}>
                <img src={props.picture} alt="product"/>
            </div>
            <h5>{props.name}</h5>
            <div className={classes.cardBottom}>
                <div className={classes.priceProduct}>
                    <span>Price:</span>
                    <b>{props.price} rub.</b>
                </div>
                <img src={isAdded ? '/imgs/productBlock/check-mark.svg' : '/imgs/productBlock/plus.svg'} alt="plus"
                     className={classes.plusToCart}
                     onClick={onClickPlus}/>
            </div>
        </div>
    )
}

export default Card;