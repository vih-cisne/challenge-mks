import { ButtonCart, HeaderStyled, Logo } from "./style"
import cartIcon from '../../images/Vector.svg'



const Header = () => {

    return (
        <HeaderStyled>
            <Logo>
                <h2>MKS</h2>
                <h3>Sistemas</h3>
            </Logo>

            <ButtonCart><img src={cartIcon} alt="Ícone de um carrinho"/><span>0</span></ButtonCart>
        
        </HeaderStyled>
    )

}

export default Header