import classes from "../content/content.module.scss";
import React from "react";
import Card from "../card/Card";

function Favorite(props) {

    let favorites = props.favorites.map(f => <Card favorited={true} key={f.id} onAddToFavorite={props.onAddToFavorite}
                                                   id={f.id} items={f}/>)

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