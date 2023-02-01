import React, {useEffect, useState} from 'react';
import classes from "./content.module.scss";
import Card from "../card/Card";
import axios from "axios";

function Content(props) {

    const [items, setItems] = useState([])

    let tShirtCards = items.map(c => <Card cartItems={props.cartItems}  setCartItems={props.setCartItems} name={c.name} picture={c.picture} price={c.price} favorite={c.favorite}/>)

    useEffect(() => {
        fetch('https://63da27c32af48a60a7c66e9a.mockapi.io/items').then(data => {
            return data.json()
        }).then(json => {
            setItems(json)
        })
    },[])

    return (
        <div className={classes.content}>
            <div className={classes.searchBlock}>
                <h1>All t-shirts</h1>
                <div className={classes.search}>
                    <img src='/imgs/header/search.png' alt="search"/>
                    <input placeholder={'search...'}/>
                </div>
            </div>
            <div className={classes.tshirts}>
                {tShirtCards}
            </div>
        </div>
    )
}

export default Content;