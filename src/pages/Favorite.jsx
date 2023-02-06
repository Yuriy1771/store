import classes from "../components/content/content.module.scss";
import React, {useEffect, useState} from "react";
import Card from "../components/card/Card";
import {favoriteAPI} from "../dall/api";

function Favorite(props) {

    const [items, setItems] = useState([]);

    useEffect(()=> {
        favoriteAPI.getFavorites().then(data => {
        console.log(data)
        setItems(data)
        });
    },[])

    const setFavorites = items.map(f => <Card name={f.name} picture={f.picture} price={f.price} favorited={true}/>)
    return (
        <div className={classes.content}>
            <div className={classes.searchBlock}>
                <h1>Favorites</h1>
                <div className={classes.search}>
                {/*    <img src='/imgs/header/search.png' alt="search"/>*/}
                {/*    {props.searchValue && <img src='/imgs/drawer/close.svg' alt="clear" className={classes.clearBtn}*/}
                {/*                               onClick={onClearSearch}/>}*/}
                {/*    <input placeholder={'search...'} value={props.searchValue} onChange={onChangeSearchInput}/>*/}
                </div>
            </div>
            <div className={classes.tshirts}>
                {setFavorites}
            </div>
        </div>
    )
}

export default Favorite;