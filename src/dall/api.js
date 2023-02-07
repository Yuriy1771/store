import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:8080/api/',
})


export const contentAPI = {
    getItems() {
        return instance.get('items').then(data => data.data)
    },
}

export const cartAPI = {
    addToCart(data) {
        return instance.post(`cart`,data).then(data => data.data)
    },
    getToCart() {
        return instance.get(`cart`).then(data => data.data)
    },
    deleteFromCart(id){
        return instance.delete(`cart/${id}`)
    }
}

export const favoriteAPI = {
    favoriteApi(data) {
        return instance('favorites',data).then(data => data.data)
    }
}