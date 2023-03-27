import classes from "./drawer.module.scss";
import Info from "../info/Info";

function Drawer(props) {

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
                                                 onClick={() => props.deleteProductFromCart(i)}/>
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
                        <Info title={'Cart empty'} description={'Add at least one t-shirt to place an order'} img={'https://cdn-icons-png.flaticon.com/512/1170/1170576.png'}/>
                }
            </div>
        </div>
    )
}

export default Drawer;