import classes from "../content/content.module.scss";
import React from "react";
import Card from "../card/Card";

function Favorite(props) {

    let favorites = props.favorites.map(f => <Card name={f.name} price={f.price} picture={f.picture}/>)

    return (
            <div className={classes.content}>
                <div className={classes.searchBlock}>
                    <h1>Favorites:</h1>

                </div>
                <div className={classes.tshirts}>
                    {favorites}
                </div>
            </div>
    )
}

export default Favorite;