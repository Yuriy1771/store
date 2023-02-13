import React, {useState} from 'react';
import classes from "./content.module.scss";
import Card from "../card/Card";

function Content(props) {

    const [searchValue, setSearchValue] = useState('')

    let tShirtCards = props.items.filter(c => c.name.toLowerCase().includes(searchValue.toLowerCase())).map(c => <Card
        cartItems={props.cartItems} setCartItems={props.setCartItems}
        favorite={c.favorite} key={c.id}
        setFavorites={props.setFavorites} items={c}
        id={c.id} onAddToCart={props.onAddToCart}
        onAddToFavorite={props.onAddToFavorite}
        isAdded={props.cartItems.some((item) => item.id === c.id)}
        isLoading={props.isLoading}
    />)

    const onChangeSearchInput = (e) => {
        let text = e.target.value
        setSearchValue(text)
    }

    const onClearSearch = () => {
        setSearchValue('')
    }


    return (
        <div className={classes.content}>
            <div className={classes.searchBlock}>
                <h1>{searchValue ? `Search by: ${searchValue}` : 'All t-shirts'}</h1>
                <div className={classes.search}>
                    <img src='/imgs/header/search.png' alt="search"/>
                    {searchValue && <img src='/imgs/drawer/close.svg' alt="clear" className={classes.clearBtn}
                                         onClick={onClearSearch}/>}
                    <input placeholder={'search...'} value={searchValue} onChange={onChangeSearchInput}/>
                </div>
            </div>
            <div className={classes.tshirts}>
                {tShirtCards}
            </div>
        </div>
    )
}

export default Content;