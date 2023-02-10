import axios from "axios";
import classes from "../components/card/card.module.scss";
import React from "react";

const instance = axios.create({
    baseURL: 'http://localhost:8080/api/',
})


export const contentAPI = {
    getItems() {
        return instance.get('items').then(data => data.data)
    },
}

export const cartAPI = {
    getToCart() {
        return instance.get(`cart`).then(data => data.data)
    },
    addToCart(id) {
        return instance.post(`cart`,{id}).then(data => data.data)
    },
    deleteFromCart(id){
        return instance.delete(`cart/${id}`)
    }
}
// <div className={classes.card}>
//     <img src={isFavorite ? '/imgs/productBlock/heart-liked.svg' : '/imgs/productBlock/heart-unliked.svg'}
//          alt="unliked" className={classes.favorite} onClick={() => onClickFavorite(item)}/>
//     <div className={classes.tShirts}>
//         <img src={props.items.picture} alt="product"/>
//     </div>
//     <h5>{props.items.name}</h5>
//     <div className={classes.cardBottom}>
//         <div className={classes.priceProduct}>
//             <span>Price:</span>
//             <b>{props.items.price} rub.</b>
//         </div>
//         <img src={isAdded ? '/imgs/productBlock/check-mark.svg' : '/imgs/productBlock/plus.svg'} alt="plus"
//              className={classes.plusToCart}
//              onClick={() => onClickPlus(item)}/>
//     </div>
export const favoriteAPI = {
    addFavorite(id) {
        return instance.post('favorite', {id}).then(data => data.data)
    },
    getFavorite() {
        return instance.get('favorite').then(data => data.data)
    },
    deleteFavorite(id) {
        return instance.delete(`favorite/${id}`).then(data => data.data)
    }
}