import classes from './index.module.scss';
import Header from "./components/header/Header";
import Content from "./components/content/Content";
import Drawer from "./components/drawer/Drawer";
import {useEffect, useState} from "react";
import {Route, Routes} from "react-router-dom";
import Favorite from "./pages/Favorite";
import {cartAPI, contentAPI, favoriteAPI} from "./dall/api";

function App(props) {
    const [items, setItems] = useState([])
    const [cartItems, setCartItems] = useState([])
    const [cartOpened, setCartOpened] = useState(false)
    const [searchValue, setSearchValue] = useState('')
    const [favorites, setFavorites] = useState([])
    // const [isFavorite, setFavorite] = useState(props.favorited)

    useEffect(() => {
            contentAPI.getItems().then(data => {
                setItems(data)
            })
            cartAPI.getToCart().then(data => {
                setCartItems(data)
            })
            favoriteAPI.getFavorites().then(data => {
                // setItems(data)
            })
        }, []
    )
    const onAddToCart = (data) => {
        cartAPI.addToCart(data).then(data => data.data)
        setCartItems(prev => [...prev, data])
    }

    const deleteProductFromCart = (id) => {
        cartAPI.deleteFromCart(id)
        setCartItems((prev) => prev.filter(data => data.id !== id))
    }
    console.log(cartItems)

    const onAddFavorite = (items) => {
        // if (favorites.find(items => id === id)) {
        //     favoriteAPI.deleteFromFavorite(id).then(data => {
        //         props.setItems((prev) => prev.filter(data => data.id !== data))
        //     })
        // } else {
        //     favoriteAPI.favoriteApi(id);
        //     setFavorites((prev) => [...prev, items])
        // }
    }

    const onChangeSearchInput = (e) => {
        let text = e.target.value
        setSearchValue(text)
    }
    const onClearSearch = () => {
        setSearchValue('')
    }
    return (
        <div className={classes.wrapper}>
            <div>
                {cartOpened ? <Drawer
                    items={items}
                    cartItems={cartItems}
                    setCartItems={setCartItems}
                    onClose={() => setCartOpened(false)}
                    deleteProductFromCart={deleteProductFromCart}/> : null}
            </div>
            <div>
                <Header onClickCart={() => setCartOpened(true)}/>
            </div>
            <div>
                <Routes>
                    <Route path={'/'} element={<Content
                        // searchValue={searchValue}
                        // setSearchValue={setSearchValue}
                        // setItems={setItems}
                        items={items}
                        // setCartItems={setCartItems}
                        // cartItems={cartItems}
                        onClearSearch={onClearSearch}
                        onChangeSearchInput={onChangeSearchInput}
                        onAddToCart={onAddToCart}
                    />}/>
                    {/*<Route path={'/favorite'} element={<Favorite*/}
                    {/*    setItems={setItems}*/}
                    {/*    items={items}*/}
                    {/*    onAddFavorite={onAddFavorite}*/}
                    {/*/>}/>*/}
                </Routes>
            </div>
        </div>
    );
}

export default App;
