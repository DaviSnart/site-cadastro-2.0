import axios from "axios";

const api = axios.create({
    baseURL: 'https://api-registro-de-usu-rios-2.vercel.app'
})

export default api