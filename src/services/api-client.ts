import axios from "axios";


export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'ec0da4ba18b84d8f993fcf15615d7dc5',
    }
})