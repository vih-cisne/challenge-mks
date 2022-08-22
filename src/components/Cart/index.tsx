import { CartStyled, ContainerProductsCart, FinishButton, HeaderOfCart, Total } from "./style"
import { usePresence, AnimatePresence } from "framer-motion"
import React from 'react'


import { IProductCart } from "../../redux/cartSlice"


import { useEffect } from "react";
import { useSelector } from "react-redux"
import { RootState } from "../../redux/store"
import ProductCart from "../ProductCart";

interface IProps {
    showCart: boolean
    setShowCart?: any
}



const Cart = ({showCart, setShowCart}:IProps) => {

  const cart = useSelector((state: RootState) => state.cart)

    const [isPresent, safeToRemove] = usePresence()

  useEffect(() => {
    !isPresent && setTimeout(safeToRemove, 1000)
  }, [isPresent])
    
        

    return (
        <AnimatePresence >
            {showCart && <CartStyled initial={{ x: '100%' }}
            animate={{ x: '0%' }}
            exit={{ x: '100%' }} transition={{type: "spring", duration: 1.5}}>
            <HeaderOfCart><h2>Carrinho de compras</h2><button onClick={() => {setShowCart(!showCart)}}>X</button></HeaderOfCart>

            <ContainerProductsCart>
            {cart.cartList.map((item, index) => <ProductCart product={item} key={index}/>)}

        </ContainerProductsCart>
        <Total><p>Total:</p><span>R$ {cart.cartList.reduce((acc,item:IProductCart) => acc += Number(item.price)*item.quantity, 0)}</span></Total>
        <FinishButton>Finalizar compra</FinishButton>
        

        </CartStyled>}
       

        </AnimatePresence>
        
        
    )

}

export default Cart