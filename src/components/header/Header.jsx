import React, {useEffect} from 'react';
import classes from "./header.module.scss";
import {Link} from "react-router-dom";

function Header(props) {

    return (
        <header>
            <div className={classes.headerLeft}>
                <img src='/imgs/header/logoStore.png' alt={'logo'}/>
                <Link to={'/'}>
                    <div>
                        <h3>T-shirts store</h3>
                        <p>Store of the best t-shirts</p>
                    </div>
                </Link>
            </div>
            <ul className={classes.headerRight}>
                <li onClick={props.onClickCart}>
                    <img className={classes.logoCart} src='/imgs/header/cart.png'/>
                    <span>3 645 rub.</span></li>
                <Link to={'/favorites'}>
                    <li>
                        <img className={classes.logoProfile} src='/imgs/productBlock/heart-liked.svg'/>
                    </li>
                </Link>
                <li>
                    <img className={classes.logoProfile} src='/imgs/header/profile.png'/>
                </li>
            </ul>
        </header>
    )
}

export default Header;