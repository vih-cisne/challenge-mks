import { ButtonCart, HeaderStyled, Logo, ToogleStyled } from "./style"
import cartIcon from '../../images/Vector.svg'
import { useSelector } from "react-redux"
import { RootState } from "../../redux/store"
import { IProductCart } from "../../redux/cartSlice"
import { Cloud, Moon, Sun } from "phosphor-react"
import { motion } from "framer-motion"
import { WiStars } from "react-icons/wi";

interface IThemeProps {
    theme: string
    setTheme: any
    showCart: boolean
    setShowCart: any
}


const Header = ({theme, setTheme, showCart, setShowCart}:IThemeProps) => {

    const cart = useSelector((state: RootState) => state.cart)

    const animation = theme === 'light' ? {
        x: '0px',
        rotateY: [180, 0],
        rotate: [350, 0]

    } : {
        rotateY: [0, 180],
        rotate: [0, 350],
        x: '18px'
    }

    const animationDetails = theme === 'light' ? {
        x: '20px',

    } : {
        x: '0px'
    }

    return (
        <HeaderStyled>
            <div style={{position: 'absolute', top: '13vh', left: '1rem'}}>
            <ToogleStyled onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
            <motion.div animate={animation} transition={{duration: 1}}>
            {theme === 'light' ? <Sun size={24} weight="fill" /> : <Moon size={24}  weight="fill" />}
            </motion.div>
            <motion.div animate={animationDetails} transition={{duration: 1}}>{theme === 'light' ? <Cloud size={24} weight="fill" /> : <WiStars/>}</motion.div>
        </ToogleStyled>
            </div>
            <Logo>
                <h2>MKS</h2>
                <h3>Sistemas</h3>
            </Logo>

            <ButtonCart onClick={() => setShowCart(!showCart)}><img src={cartIcon} alt="Ícone de um carrinho"/><span>{cart.cartList.reduce((acc, item:IProductCart) => acc += item.quantity, 0)}</span></ButtonCart>
        
        </HeaderStyled>
    )

}

export default Header