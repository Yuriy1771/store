import classes from './index.module.scss';
import Header from "./components/header/Header";
import Content from "./components/content/Content";
import Drawer from "./components/drawer/Drawer";
import {useState} from "react";
import {favoriteAPI} from "./dall/api";

function App(props) {
    const [items, setItems] = useState([])
    const [searchValue, setSearchValue] = useState('')
    const [cartOpened, setCartOpened] = useState(false)
    const [cartItems, setCartItems] = useState([])
    const [favorites, setFavorites] = useState([]);

   // const onFavorite = (data) => {
   //     favoriteAPI.favoriteApi(data);
   //     setFavorites((prev) => [...prev, data])
   //  }
    return (
        <div className={classes.wrapper}>
            <div>
                {cartOpened ? <Drawer items={items} cartItems={cartItems}
                                      setCartItems={setCartItems}
                                      onClose={() => setCartOpened(false)}/> : null}
            </div>
            <div>
                <Header onClickCart={() => setCartOpened(true)}/>
            </div>
            <div>
                <Content
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                    setItems={setItems}
                    items={items}
                    setCartItems={setCartItems}
                    cartItems={cartItems}
                    setFavorites={setFavorites}
                />
            </div>
        </div>
    );
}

export default App;
