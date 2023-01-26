import './App.css';
import classes from './index.module.scss';

function App() {
    return (
        <div className={classes.wrapper}>
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
                <h1>All t-shirts</h1>
                <div className={classes.tshirts}>

                <div className={classes.card}>
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
