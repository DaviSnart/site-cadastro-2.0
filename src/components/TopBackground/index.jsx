import UsersImage from "../../assets/users.png"
import { BackGround } from "./styles";

function TopBackGround() {
    return (
        <BackGround>
        <img src={UsersImage} alt="imagem-usuários" />
      </BackGround>

    )
}

export default TopBackGround