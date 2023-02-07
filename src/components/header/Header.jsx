import React, {useEffect} from 'react';
import classes from "./header.module.scss";

function Header(props) {

    return (
        <header>
            <div className={classes.headerLeft}>
                <img src='/imgs/header/logoStore.png'/>
                <div>
                    <h3>T-shirts store</h3>
                    <p>Store of the best t-shirts</p>
                </div>
            </div>
            <ul className={classes.headerRight}>
                <li onClick={props.onClickCart}>
                    <img className={classes.logoCart} src='/imgs/header/cart.png'/>
                    <span>3 645 rub.</span></li>
                <li>
                    <img className={classes.logoProfile} src='/imgs/header/profile.png'/>
                </li>
            </ul>
        </header>
    )
}

export default Header;