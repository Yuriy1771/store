import classes from "./drawer.module.scss";
import {useState} from "react";

function Drawer(props) {

    return (
        <div className={classes.overlay}>
            <div className={classes.drawer}>
                <h2>Cart<img src='/imgs/drawer/close.svg' alt="close" className={classes.closeBtn} onClick={props.onClose}/>
                </h2>
                <div className={classes.items}>
                    {
                        props.cartItems.map( i => (
                            <div className={classes.cardItem}>
                                <img src={i.picture} alt="product"/>
                                <div className={classes.cardItemInfo}>
                                    <p>{i.name}</p>
                                    <b>{i.price} rub.</b>
                                </div>
                                <img src='/imgs/drawer/close.svg' alt="close" className={classes.closeBtn}/>
                            </div>
                            ))
                    }


                </div>
                <div className={classes.cardTotalBlock}>
                    <ul>
                        <li>
                            <span>Total:</span>
                            <div></div>
                            <b>3 645 rub.</b>
                        </li>
                        <li>
                            <span>Tax 5%:</span>
                            <div></div>
                            <b>300 rub.</b>
                        </li>
                    </ul>
                    <button>Сheckout the goods <img src='/imgs/drawer/arrow-right.svg' alt="arrow-right"/></button>
                </div>
            </div>
        </div>
    )
}

export default Drawer;