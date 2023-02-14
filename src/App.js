import classes from './index.module.scss';
import Header from "./components/header/Header";
import Content from "./components/content/Content";
import Drawer from "./components/drawer/Drawer";
import {useContext, useEffect, useState} from "react";
import {cartAPI, contentAPI, favoriteAPI} from "./dall/api";
import {Route, Routes} from "react-router-dom";
import Favorite from "./components/favorite/Favorite";
import AppContext from "./dall/context";

function App(props) {


    let arrayForSkeleton = [
        {name: ''}, {name: ''}, {name: ''}, {name: ''}, {name: ''}, {name: ''}, {name: ''}, {name: ''}
    ]
    const [items, setItems] = useState(arrayForSkeleton)
    const [cartItems, setCartItems] = useState([])
    const [cartOpened, setCartOpened] = useState(false)
    const [favorites, setFavorites] = useState([])
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            const cartResponse = await cartAPI.getToCart()
            const favoriteResponse = await favoriteAPI.getFavorite()
            const itemsResponse = await contentAPI.getItems()

            setIsLoading(false)

            setCartItems(cartResponse)
            setFavorites(favoriteResponse)
            setItems(itemsResponse)
        }

        fetchData()
    }, [])

    const onAddToCart = (item) => {
        if (cartItems.find((carItem) => carItem.id === item.id)) {
            cartAPI.deleteFromCart(item.id).then(data => data.data)
            setCartItems((prev) => prev.filter((favItem) => favItem.id !== item.id))
        } else {
            cartAPI.addToCart(item.id);
            setCartItems((prev) => [...prev, item])
        }

    }

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
        <AppContext.Provider value={{cartItems, items, favorites}}>
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
                                                        isLoading={isLoading}
                    />}/>
                    <Route path={'/favorites'}
                           element={<Favorite onAddToFavorite={onAddToFavorite}/>}/>
                </Routes>
            </div>
        </AppContext.Provider>
    );
}

export default App;
