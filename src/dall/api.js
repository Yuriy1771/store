import axios from "axios";

// const instanceMockApi = axios.create({
//     baseURL: 'https://63da27c32af48a60a7c66e9a.mockapi.io/',
// })

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
    deleteToCart(id){
        return instance.delete(`cart/${id}`)
    }
}

export const favoriteAPI = {
    favoriteApi(data) {
        return instance.post('favorite',data).then(data => data.data)
    },
    getFavorites() {
        return instance.get('favorite').then(data => data.data)
    }
}