
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import api from "../services/api"
import { Button } from "../../components/Button/styles"
import TopBackGround from "../../components/TopBackground"
import Trash from "../../assets/trash.svg"

import {
    Container,
    Title,
    ContainerItens,
    CardUsers,
    TrashIcon,
    AvatarUser
} from "./styles"

function ListUsers() {
    const [users, setUsers] = useState([])

    useEffect(() => {

        async function getUsers() {
            const { data } = await api.get('/usuarios')

            setUsers(data)
        }
        getUsers()

    }, [])

    async function deleteUsers(id) {
        await api.delete(`/usuarios/${id}`)

        const updatedUsers = users.filter( user => user.id !== id)

        setUsers(updatedUsers)
    }

    const navigate = useNavigate()

    return (
        <Container>

            <TopBackGround />
            <Title>Lista de Usuárioss</Title>

            <ContainerItens>
                {users.map((user) => (
                    <CardUsers key={user.id}>
                        <AvatarUser src={`https://avatar.iran.liara.run/public?username=${user.id}`}/>
                        <div>
                            <h3>{user.name}</h3>
                            <p>{user.age}</p>
                            <p>{user.email}</p>
                        </div>
                        <TrashIcon src={Trash} alt="icone-lixo" onClick={() => deleteUsers(user.id)}/>
                    </CardUsers>
                ))}

            </ContainerItens>
            <Button type='button' onClick={() => navigate('/')} >Voltar</Button>
        </Container>
    )
}

export default ListUsers