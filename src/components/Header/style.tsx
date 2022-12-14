import styled from "styled-components";

export const HeaderStyled = styled.header`
    background-color: var(--primary-color);
    width: 100%;
    z-index: 5;
    height: 12vh;
    min-height: 3rem;
    position: fixed;
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    align-items: center;
    top: 0;
    left: 0;
    padding: 0 2rem;
`

export const Logo = styled.div`

    color: var(--white-0);
    display: flex;
    align-items: baseline;
    gap: 0.2rem;

    h2 {
        font-weight: 600;
        font-size: 2rem;
    }

    h3 {
        font-weight: 300;
        font-size: 1rem;

    }

`

export const ButtonCart = styled.button`
    border: none;
    border-radius: 0.5rem;
    padding: 0.7rem 0.8rem;
    max-height: 80%;
    display: flex;
    align-items: center;
    gap: 0.8rem;

    img {
        width: 1.2rem;
    }

    span {
        font-weight: 600;
        font-size: 1.2rem;
    }

    

`

export const ToogleStyled = styled.button`

    border-radius: 30px;
    padding: 0.1rem;
    width: 3.2rem;
    background-color: var(--primary-color);
    border: 1px solid var(--primary-color);
    display: flex;
    color: var(--white-0);
    font-size: 1.5rem;
    position: relative;

    >div:nth-child(2) {
        position: absolute;
        bottom: -6px;
    }

`