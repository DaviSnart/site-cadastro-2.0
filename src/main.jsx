import React from 'react'
import ReactDOM from 'react-dom/client'
import { GlobalStyle } from './styles/GlobalStyles.js'
import { RouterProvider } from 'react-router-dom'
import router from './routes.jsx'
/* import Home from './pages/Home' não preciso importar o nome do arquivo index.jsx porque quando o arquivo se chama index o react já codifica*/


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle/>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

/* se eu quiser import um item pelo default eu coloco import normal assim:
import App from ".NomeDoArquivo.jsx"

Se for por import pelo export normal eu coloco entre as chaves {} porque se eu exporto normal
certamente estou esperando mais de um item ser importado, por isso necessita as chaves entre.
*/
