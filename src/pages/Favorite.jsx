import classes from "../components/content/content.module.scss";
import React, {useEffect, useState} from "react";
import Card from "../components/card/Card";
import {favoriteAPI} from "../dall/api";

function Favorite(props) {

    // const [items, setItems] = useState([]);

    const setFavorites = props.items.map(f => <Card name={f.name} picture={f.picture}
                                              price={f.price} favorited={true}
                                              key={f.id} onAddFavorite={props.onAddFavorite} id={f.id}
                                              items={f.items}/>)
    // let id = items.id;
    // useEffect(() => {
    //     favoriteAPI.getFavorites().then(data => {
    //         console.log(data)
    //         setItems(data)
    //     });
    // }, [])

    return (
        <div className={classes.content}>
            <div className={classes.searchBlock}>
                <h1>Favorites</h1>
            </div>
            <div className={classes.tshirts}>
                {setFavorites}
            </div>
        </div>
    )
}

export default Favorite;