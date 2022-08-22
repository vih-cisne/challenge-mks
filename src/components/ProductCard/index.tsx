import { ButtonBuy, CardStyled } from "./style"
import { IProduct } from "../../redux/productsSlice";
import bagIcon from "../../images/shopping-bag.svg"
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { addToCart } from "../../redux/cartSlice";


interface IPropsProducts {
    product: IProduct
}


const ProductCard = ({product}: IPropsProducts) => {

    const dispatch = useDispatch<AppDispatch>()

    let priceFormat = product.price.split('.')
    priceFormat.pop()

    return (
        <CardStyled>
            <img src={product.photo} alt={product.name}/>
            <div><h3>{product.name}</h3>
            <span>R$ {priceFormat}</span></div>
            <p>{product.description}</p>

            <ButtonBuy onClick={() => dispatch(addToCart(product))}><img src={bagIcon} alt="Ícone de sacola"/>Comprar</ButtonBuy>
        </CardStyled>
    )
}

export default ProductCard