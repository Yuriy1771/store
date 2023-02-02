import React, {useEffect, useState} from 'react';
import classes from "./content.module.scss";
import Card from "../card/Card";
import axios from "axios";
import {contentAPI} from "../../dall/api";

function Content(props) {

    const [items, setItems] = useState([])
    const [searchValue, setSearchValue] = useState('')
    console.log(searchValue)
    let tShirtCards = items.filter(c => c.name.toLowerCase().includes(searchValue.toLowerCase())).map(c => <Card
        cartItems={props.cartItems} setCartItems={props.setCartItems}
        name={c.name} picture={c.picture}
        price={c.price} favorite={c.favorite}
        key={c.id}/>)

    const onChangeSearchInput = (e) => {
        let text = e.target.value
        setSearchValue(text)
    }

    const onClearSearch = () => {
        setSearchValue('')
    }

    useEffect(() => {
       contentAPI.getItems().then(data => {
           setItems(data)
       })
        }, []
    )

    return (
        <div className={classes.content}>
            <div className={classes.searchBlock}>
                <h1>{searchValue ? `Search by: ${searchValue}` : 'All t-shirts'}</h1>
                <div className={classes.search}>
                    <img src='/imgs/header/search.png' alt="search"/>
                    {searchValue && <img src='/imgs/drawer/close.svg' alt="clear" className={classes.clearBtn}
                                         onClick={onClearSearch}/>}
                    <input placeholder={'search...'} value={searchValue} onChange={onChangeSearchInput}/>
                </div>
            </div>
            <div className={classes.tshirts}>
                {tShirtCards}
            </div>
        </div>
    )
}

export default Content;