import axios from "axios";

const instance = axios.create({
    baseURL: 'https://63da27c32af48a60a7c66e9a.mockapi.io/',
})

export const contentAPI = {
    getItems() {
        return instance.get('items').then(data => data.data)
    }
}