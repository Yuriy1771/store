import React, {useEffect, useState} from 'react';
import classes from "./card.module.scss";

function Card({price,picture,favorite,name, setCartItems, cartItems}) {

    const [isAdded, setAdded] = useState(false)
    const [isFavorite, setFavorite] = useState(false)

    const onClickPlus = (props) => {
        setAdded(!isAdded)
        onPlus({price,picture,favorite,name })
    }
    const onPlus = (data) => {
        onAddToCart(data)
    }
    const onAddToCart = (data) => {
       setCartItems(prev => [...prev, data])
    }

    const onFavorite = () => {
        setFavorite(!isFavorite)
    }

    return (

        <div className={classes.card}>
            <img src={isFavorite ? '/imgs/productBlock/heart-liked.svg' : '/imgs/productBlock/heart-unliked.svg'}
                 alt="unliked" className={classes.favorite} onClick={onFavorite}/>
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