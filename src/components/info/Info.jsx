import React, {useContext} from 'react'
import classes from "../drawer/drawer.module.scss";
import AppContext from "../../dall/context";

function Info(props) {

    const {setCartOpened} = useContext(AppContext)

    return (
        <div>
            <div className={classes.cartEmpty}>
                <img src={props.img}
                     className={classes.cartEmptyImg} alt="empty cart"/>
                <h2>{props.title}</h2>
                <p>{props.description}</p>
                <button className={classes.greenBtn} onClick={() => setCartOpened(false)}>
                    Come back<img src="https://cdn-icons-png.flaticon.com/512/3183/3183354.png"
                                  alt="arrow"/>
                </button>
            </div>
        </div>
    )
}

export default Info;