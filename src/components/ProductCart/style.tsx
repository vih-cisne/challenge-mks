import styled from "styled-components";

export const Card = styled.div`
    
    background-color: white;
    border-radius: 10px;
    align-items: center;
    position: relative;
    margin-bottom: 0.8rem;
    display: flex;
    padding: 1.5rem 0.8rem;
    gap: 0.5rem;
    justify-content: space-around;

    >p {
        font-size: 13px;
        width: 30%;
    }

    >h4 {
        font-size: 14px;
        font-weight: 700;
    }

    >img {
        height: 2.5rem;
        width: 3rem;
    }

`

export const CloseButton = styled.button`
    position: absolute;
    right: -0.3rem;
    top: -0.3rem;
    border: none;
    border-radius: 50%;
    background-color: black;
    color: white;
    font-weight: 500;
    border: none;
    width: 1.2rem;
    height: 1.2rem;
`

export const QtdContainer = styled.div`

    >span {
        font-size: 10px;
        width: 100%;
        display: flex;
        margin-bottom: 0.1rem;
    }
    
    >div {
        display: flex;
        border: 0.8px #BFBFBF solid;
        border-radius: 5px;
        overflow: hidden;
        padding: 0.2rem 0.3rem;

        >span {
            border-left: 0.5px #BFBFBF solid;
            border-right: 0.5px #BFBFBF solid;
            padding: 0 0.3rem;
            display: flex;
            align-items: center;
            font-size: 10px;
            
        }

        >button {
            border: none;
            background-color: white;

        }

        >button:nth-child(1) {
            margin-right: 0.3rem;
        }

        >button:nth-child(3) {
            margin-left: 0.3rem;

        }
    }
`