import classes from './index.module.scss';
import Header from "./components/header/Header";
import Content from "./components/content/Content";
import Drawer from "./components/drawer/Drawer";
import {useEffect, useState} from "react";
import {cartAPI, contentAPI, favoriteAPI} from "./dall/api";

function App(props) {
    const [items, setItems] = useState([])
    const [cartItems, setCartItems] = useState([])
    const [cartOpened, setCartOpened] = useState(false)
    const [searchValue, setSearchValue] = useState('')
    const [favorites, setFavorites] = useState([]);

   // const onFavorite = (data) => {
   //     favoriteAPI.favoriteApi(data);
   //     setFavorites((prev) => [...prev, data])
   //  }

    useEffect(() => {
        contentAPI.getItems().then(data => {
            setItems(data)
        })
        cartAPI.getToCart().then(data => {
            setCartItems(data)
        })
    },[])

    const onAddToCart = (id, items) => {
        cartAPI.addToCart(id);
        console.log(id)
        console.log(items)
        setCartItems((prev) => [...prev, items])
    }

    const deleteProductFromCart = (id) => {
        cartAPI.deleteFromCart(id).then(data => data.data)
        setCartItems((prev) => prev.filter(i => i.id !== id))
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
            <div>
                <Content
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                    setItems={setItems}
                    items={items}
                    setCartItems={setCartItems}
                    cartItems={cartItems}
                    setFavorites={setFavorites}
                    onAddToCart={onAddToCart}
                />
            </div>
        </div>
    );
}

export default App;
