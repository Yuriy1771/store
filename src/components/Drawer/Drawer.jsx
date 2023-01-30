import classes from "./drawer.module.scss";

function Drawer(props) {
    return (
        <div style={{display: 'none'}} className={classes.overlay}>
            <div className={classes.drawer}>
                <h2>Cart<img src='/imgs/drawer/close.svg' alt="close" className={classes.closeBtn}/>
                </h2>
                <div className={classes.items}>
                    <div className={classes.cardItem}>
                        <img src='/imgs/t-shirts/1.png' alt=""/>
                        <div className={classes.cardItemInfo}>
                            <p>T-SHIRT ROUND NECK SS MONSTERS WITH CRYSTALS</p>
                            <b>3 645 rub.</b>
                        </div>
                        <img src='/imgs/drawer/close.svg' alt="close" className={classes.closeBtn}/>
                    </div>
                    <div className={classes.cardItem}>
                        <img src='/imgs/t-shirts/1.png' alt=""/>
                        <div className={classes.cartItemInfo}>
                            <p>T-SHIRT ROUND NECK SS MONSTERS WITH CRYSTALS</p>
                            <b>3 645 rub.</b>
                        </div>
                        <img src='/imgs/drawer/close.svg' alt="close" className={classes.closeBtn}/>
                    </div>
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