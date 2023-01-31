import React from 'react';
import classes from "./content.module.scss";
import Card from "../card/Card";

const cards = [
    {
        name: 'T-SHIRT ROUND NECK SS HAWAII',
        picture: 'https://www.plein.com/on/demandware.static/-/Sites-plein-master-catalog/default/dw2d0acb7c/images/large/SACC-MTK6112-PJY002N_01_sf.jpg',
        price: '8 865',
        favorite: false,
    },
    {
        name: 'T-SHIRT ROUND NECK SS MONSTERS WITH CRYSTALS',
        picture: '/imgs/t-shirts/1.png',
        price: '6 450',
        favorite: false,
    }
]

function Content(props) {

    let tShirtCards = cards.map(c => <Card name={c.name} picture={c.picture} price={c.price} favorite={c.favorite}/>)

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