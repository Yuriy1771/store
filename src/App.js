import classes from './index.module.scss';
import Header from "./components/header/Header";
import Content from "./components/content/Content";
import Drawer from "./components/drawer/Drawer";
import {useState} from "react";
import {Route, Routes} from "react-router-dom";
import Favorite from "./pages/Favorite";

function App(props) {
    const [items, setItems] = useState([])
    const [searchValue, setSearchValue] = useState('')
    const [cartOpened, setCartOpened] = useState(false)
    const [cartItems, setCartItems] = useState([])
    const [favorites, setFavorites] = useState([]);

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
                <Routes>
                    <Route path={'/'} element={<Content
                        searchValue={searchValue}
                        setSearchValue={setSearchValue}
                        setItems={setItems}
                        items={items}
                        setCartItems={setCartItems}
                        cartItems={cartItems}
                        setFavorites={setFavorites}
                    />}/>
                    <Route path={'/favorite'} element={<Favorite
                        setItems={setItems}
                        items={items}
                    />}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
