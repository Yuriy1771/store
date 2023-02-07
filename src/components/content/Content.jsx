import React, {useEffect, useState} from 'react';
import classes from "./content.module.scss";
import Card from "../card/Card";
import axios from "axios";
import {contentAPI} from "../../dall/api";

function Content(props) {


    let tShirtCards = props.items.filter(c => c.name.toLowerCase().includes(props.searchValue.toLowerCase())).map(c => <Card
        cartItems={props.cartItems} setCartItems={props.setCartItems}
        name={c.name} picture={c.picture}
        price={c.price} favorite={c.favorite}
        key={c.id}
        setFavorites={props.setFavorites}
        items={c}
        id={c.id}
    />)

    const onChangeSearchInput = (e) => {
        let text = e.target.value
        props.setSearchValue(text)
    }

    const onClearSearch = () => {
        props.setSearchValue('')
    }

    useEffect(() => {
            contentAPI.getItems().then(data => {
                props.setItems(data)
            })


        }, []
    )

    return (
        <div className={classes.content}>
            <div className={classes.searchBlock}>
                <h1>{props.searchValue ? `Search by: ${props.searchValue}` : 'All t-shirts'}</h1>
                <div className={classes.search}>
                    <img src='/imgs/header/search.png' alt="search"/>
                    {props.searchValue && <img src='/imgs/drawer/close.svg' alt="clear" className={classes.clearBtn}
                                         onClick={onClearSearch}/>}
                    <input placeholder={'search...'} value={props.searchValue} onChange={onChangeSearchInput}/>
                </div>
            </div>
            <div className={classes.tshirts}>
                {tShirtCards}
            </div>
        </div>
    )
}

export default Content;