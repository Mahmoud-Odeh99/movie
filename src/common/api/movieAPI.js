import axios from "axios";

export default axios.create({
    baseUrl: 'https://www.omdbapi.com',
})

export const apiKey = 'b772f9a0';