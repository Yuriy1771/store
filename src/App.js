import classes from './index.module.scss';
import Header from "./components/header/Header";
import Content from "./components/content/Content";
import Drawer from "./components/drawer/Drawer";
import {useState} from "react";

function App(props) {

    const [cartOpened, setCartOpened] = useState(false)
    const [cartItems, setCartItems] = useState([])

    return (
        <div className={classes.wrapper}>
            <div>
                {cartOpened ? <Drawer cartItems={cartItems} onClose={() => setCartOpened(false)}/> : null}
            </div>
            <div>
                <Header onClickCart={() => setCartOpened(true)}/>
            </div>
            <div>
                <Content setCartItems={setCartItems} cartItems={cartItems} />
            </div>
        </div>
    );
}

export default App;
