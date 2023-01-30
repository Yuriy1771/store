import React from 'react';
import classes from "./content.module.scss";
import Card from "../card/Card";

function Content(props) {
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
                <Card/>
                <Card/>

            </div>
        </div>
    )
}

export default Content;