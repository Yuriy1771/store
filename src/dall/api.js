import axios from "axios";

const instanceMockApi = axios.create({
    baseURL: 'https://63da27c32af48a60a7c66e9a.mockapi.io/',
})

const instanceServer = axios.create({
    baseURL: 'http://localhost:30001/',
})


export const contentAPI = {
    getItems() {
        return instanceMockApi.get('items').then(data => data.data)
    },
}

export const cartAPI = {
    addToCart(data) {
        return instanceMockApi.post(`cart`,data).then(data => data.data)
    },
    getToCart() {
        return instanceMockApi.get(`cart`).then(data => data.data)
    },
    deleteToCart(id){
        return instanceMockApi.delete(`cart/${id}`)
    }
}

export const favoriteAPI = {
    favoriteApi(data) {
        return instanceServer('favorites',data).then(data => data.data)
    }
}