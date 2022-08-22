import styled from "styled-components";
import { motion } from "framer-motion"

export const CartStyled = styled(motion.div)`
    position: fixed;
    top: 0;
    z-index: 9;
    right: 0;
    width: 330px;
    height: 100vh;
    max-width: 80%;
    background-color: var(--primary-color);
    box-shadow: -5px 0px 6px 0px #00000021;
    display: flex;
    flex-direction: column;

`

export const HeaderOfCart = styled.div`
    display: flex;
    padding: 1.5rem;
    width: 100%;
    gap: 1.5rem;
    justify-content: space-around;
    flex-wrap: nowrap;
    color: white;

    h2 {
        text-align: start;
        font-size: 25px;
        font-weight: 700;
    }

    button {
        border-radius: 50%;
        border: none;
        background-color: black;
        color: white;
        height: 25px;
        width: 28px;
        font-size: 14px;
        margin-right: -1rem;
    }
`

export const ContainerProductsCart = styled.div`  
    height: 100%;
    padding: 1rem;
    overflow-y: scroll;

    ::-webkit-scrollbar {
  width: 5px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #888;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}
`

export const Total = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    color: white;
    font-size: 22px;
    font-weight: 600;
    padding: 1.5rem;
`

export const FinishButton = styled.button`
    background-color: black;
    color: white;
    font-size: 25px;
    font-weight: 700;
    border: none;
    width: 100%;
    padding: 1.5rem;
`