import classes from "./drawer.module.scss";
import {useEffect, useState} from "react";
import {cartAPI} from "../../dall/api";

function Drawer(props) {
    useEffect(() => {
        cartAPI.getToCart().then(data => {
            props.setCartItems(data)
        })

    }, [])

    const deleteProductFromCart = (id) => {
        cartAPI.deleteToCart(id).then(data => data.data)
        props.setCartItems((prev) => prev.filter(item => item.id !== id))
    }
    return (
        <div className={classes.overlay}>
            <div className={classes.drawer}>
                <h2>Cart<img src='/imgs/drawer/close.svg' alt="close" className={classes.closeBtn}
                             onClick={props.onClose}/>
                </h2>
                {
                    props.cartItems.length > 0 ?
                        <div>
                            <div className={classes.items}>
                                {
                                    props.cartItems.map(i => (
                                        <div className={classes.cardItem}>
                                            <img src={i.picture} alt="product"/>
                                            <div className={classes.cardItemInfo}>
                                                <p>{i.name}</p>
                                                <b>{i.price} rub.</b>
                                            </div>
                                            <img src='/imgs/drawer/close.svg' alt="close" className={classes.closeBtn}
                                                 onClick={() => deleteProductFromCart(i.id)}/>
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
                                <button className={classes.greenBtn}>
                                    Сheckout the goods <img src='/imgs/drawer/arrow-right.svg' alt="arrow-right"/>
                                </button>
                            </div>
                        </div>
                        :
                        <div className={classes.cartEmpty}>
                            <img src='https://cdn-icons-png.flaticon.com/512/1170/1170576.png'
                                 className={classes.cartEmptyImg} alt="empty cart"/>
                            <h2>Cart empty</h2>
                            <p>Add at least one t-shirt to place an order</p>
                            <button className={classes.greenBtn} onClick={props.onClose}>
                                Come back<img src="https://cdn-icons-png.flaticon.com/512/3183/3183354.png"
                                              alt="arrow"/>
                            </button>
                        </div>
                }
            </div>
        </div>
    )
}

export default Drawer;