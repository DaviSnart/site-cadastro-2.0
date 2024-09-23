import axios from "axios";

const api = axios.create({
    baseURL: 'https://api-registro-de-usu-rios-2-414mqo2la.vercel.app/'
})

export default api