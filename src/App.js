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

    const onAddToCart = (item) => {
        if(cartItems.find((carItem) => carItem.id === item.id)) {
            cartAPI.deleteFromCart(item.id).then(data => data.data)
            setCartItems((prev) => prev.filter((favItem) => favItem.id !== item.id))

        } else {
            cartAPI.addToCart(item.id);
            setCartItems((prev) => [...prev, item])
        }

    }
// сравнить удаление твоара из избронного и из корзины и найти ошибку
    const deleteProductFromCart = (item) => {
        cartAPI.deleteFromCart(item.id).then(data => data.data)
        setCartItems((prev) => prev.filter(i => i !== item))
    }

    const onAddToFavorite = (item) => {
        if (favorites.find(favItem => favItem.id === item.id)) {
            favoriteAPI.deleteFavorite(item.id).then(data => data.data)
            setFavorites((prev) => prev.filter((favItem) => favItem.id !== item.id))
        } else {
            favoriteAPI.addFavorite(item.id);
            setFavorites((prev) => prev.filter(favItem => favItem.id !== item.id))
            setFavorites((prev) => [...prev, item])
        }
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
                <Route path={'/favorites'}
                       element={<Favorite favorites={favorites} onAddToFavorite={onAddToFavorite}/>}/>
            </Routes>
        </div>
    );
}

export default App;
