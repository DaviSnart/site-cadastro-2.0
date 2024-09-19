import {useRef} from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../services/api'

import {
  Container,
  Form,
  Title,
  ContainerInputs,
  InputLabel,
  Input,
} from './styles'


import Button from '../../components/Button'
import TopBackGround from '../../components/TopBackground'



function App() {

  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()

const navigate = useNavigate()
  
async function registerNewUser() {
    const data = await api.post('/usuarios/', {
      email: inputEmail.current.value,
      age: parseInt(inputAge.current.value),
      name: inputName.current.value,
    })
    navigate('/lista-de-usuarios')

    console.log(data)
  }

  return (

    <Container>
      <TopBackGround/>

      <Form>

        <Title>Cadastrar Usuário</Title>

        <ContainerInputs>
            <div>
              <InputLabel>Nome<span>*</span></InputLabel>
              <Input type="text" placeholder="Nome do usuário" ref={inputName}/>
            </div>

            <div>
              <InputLabel>Idade<span>*</span></InputLabel>
              <Input type="number" placeholder="Idade do usuário" ref={inputAge}/>
            </div>
        </ContainerInputs>

          <div style={{width:'100%'}}>
            <InputLabel>E-mail<span>*</span></InputLabel>
            <Input type="email" placeholder="E-mail do usuário" ref={inputEmail}/>
          </div>


        <Button type='button' onClick={registerNewUser} theme='primary'>Cadastrar Usuário</Button>

      </Form>

      <Button type='button' onClick={() => navigate('/lista-de-usuarios')}>Ver lista de usuários</Button>

    </Container>

  )
}

export default App
// export default serve para exportar apenas um item por página
// se eu quiser exportar mais de um, terei de colocar export antes das funções
// desta maneira: export function App(){}

