import { IProductCart } from "../../redux/cartSlice"
import { Card, CloseButton, QtdContainer } from "./style"
import { useDispatch} from "react-redux";
import { AppDispatch } from "../../redux/store";

import { removeItem, incrementQuantity, decrementQuantity } from "../../redux/cartSlice";



interface IPropsCartProduct {
    product: IProductCart
}

const ProductCart = ({product}: IPropsCartProduct) => {

    let priceFormat = product.price.split('.')
    priceFormat.pop()

    const dispatch = useDispatch<AppDispatch>()


    return (
        <Card>
            <CloseButton onClick={() => dispatch(removeItem(product.id))}>x</CloseButton>
            <img src={product.photo} alt={product.name}/>
            <p>{product.name}</p>

            <QtdContainer>
                <span>Qtd:</span>
                <div><button onClick={() => dispatch(decrementQuantity(product.id))}>-</button>
                <span>{product.quantity}</span>
                <button onClick={() => dispatch(incrementQuantity(product.id)) }>+</button>
                </div>

            </QtdContainer>

            <h4>R$ {priceFormat}</h4>

        </Card>
    )

}

export default ProductCart