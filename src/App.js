import classes from './index.module.scss';
import Header from "./components/header/Header";
import Content from "./components/content/Content";
import Drawer from "./components/drawer/Drawer";
import {useEffect, useState} from "react";
import {cartAPI, contentAPI, favoriteAPI} from "./dall/api";
import {Route, Routes} from "react-router-dom";
import Favorite from "./components/favorite/Favorite";

function App(props) {
    const [items, setItems] = useState([])
    const [cartItems, setCartItems] = useState([])
    const [cartOpened, setCartOpened] = useState(false)
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        contentAPI.getItems().then(data => {
            setItems(data)
        })
        cartAPI.getToCart().then(data => {
            setCartItems(data)
        })
        favoriteAPI.getFavorite().then(data => {
            setFavorites(data);
        })
    }, [])

    const onAddToCart = (id, items) => {
        cartAPI.addToCart(id);
        setCartItems((prev) => [...prev, items])
    }

    const deleteProductFromCart = (id) => {
        cartAPI.deleteFromCart(id).then(data => data.data)
        setCartItems((prev) => prev.filter(i => i.id !== id))
    }

    const onAddToFavorite = (id,items) => {
        favoriteAPI.addFavorite({id});
        setFavorites((prev) => [...prev, items])
    }

    return (
        <div className={classes.wrapper}>
            <div>
                {cartOpened ? <Drawer cartItems={cartItems}
                                      onClose={() => setCartOpened(false)}
                                      deleteProductFromCart={deleteProductFromCart}/> : null}
            </div>
            <div>
                <Header onClickCart={() => setCartOpened(true)}/>
            </div>
            <Routes>
                <Route path={'/'} element={<Content setItems={setItems} items={items}
                                                    setCartItems={setCartItems}
                                                    cartItems={cartItems}
                                                    setFavorites={setFavorites}
                                                    onAddToCart={onAddToCart}
                                                    onAddToFavorite={onAddToFavorite}
                />}/>
                <Route path={'/favorites'} element={<Favorite favorites={favorites}/>}/>
            </Routes>
        </div>
    );
}

export default App;
