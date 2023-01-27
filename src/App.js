import './App.css';
import classes from './index.module.scss';

function App() {
    return (
        <div className={classes.wrapper}>

            <div className={classes.overlay}>
                <div className={classes.drawer}>
                    <h2>Cart<img src='/imgs/drawer/close.svg' alt="close" className={classes.closeBtn}/>
                    </h2>
                    <div className={classes.items}>
                        <div className={classes.cartItem}>
                            <img src='/imgs/t-shirts/1.png' alt=""/>
                            <div className={classes.cartItemInfo}>
                                <p>T-SHIRT ROUND NECK SS MONSTERS WITH CRYSTALS</p>
                                <b>3 645 rub.</b>
                            </div>
                            <img src='/imgs/drawer/close.svg' alt="close" className={classes.closeBtn}/>
                        </div>
                        <div className={classes.cartItem}>
                            <img src='/imgs/t-shirts/1.png' alt=""/>
                            <div className={classes.cartItemInfo}>
                                <p>T-SHIRT ROUND NECK SS MONSTERS WITH CRYSTALS</p>
                                <b>3 645 rub.</b>
                            </div>
                            <img src='/imgs/drawer/close.svg' alt="close" className={classes.closeBtn}/>
                        </div>
                    </div>
                    <div className={classes.cartTotalBlock}>
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

            <header>
                <div className={classes.headerLeft}>
                    <img src='/imgs/header/logoStore.png'/>
                    <div>
                        <h3>T-shirts store</h3>
                        <p>Store of the best t-shirts</p>
                    </div>
                </div>
                <ul className={classes.headerRight}>
                    <li>
                        <img className={classes.logoCart} src='/imgs/header/cart.png'/>
                        <span>3 645 rub.</span></li>
                    <li>
                        <img className={classes.logoProfile} src='/imgs/header/profile.png'/>
                    </li>
                </ul>
            </header>

            <div className={classes.content}>
                <div className={classes.searchBlock}>
                    <h1>All t-shirts</h1>
                    <div className={classes.search}>
                        <img src='/imgs/header/search.png' alt="search"/>
                        <input placeholder={'search...'}/>
                    </div>
                </div>
                <div className={classes.tshirts}>
                    <div className={classes.card}>
                        <img src='/imgs/productBlock/heart-unliked.svg' alt="unliked" className={classes.favorite}/>
                        <div className={classes.tShirts}>
                            <img src='/imgs/t-shirts/1.png' alt="product"/>
                        </div>
                        <h5>T-SHIRT ROUND NECK SS MONSTERS WITH CRYSTALS</h5>
                        <div className={classes.cardBottom}>
                            <div className={classes.priceProduct}>
                                <span>Price:</span>
                                <b>6 450 rub.</b>
                            </div>
                            <button>
                                <img src='/imgs/content/addTshirt.png' alt="plus"/>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default App;
