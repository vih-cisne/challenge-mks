import styled from "styled-components";

export const CardStyled = styled.div`
  //border: 1px solid;
  box-shadow: 0px 2px 8px 0px #00000022;
  border-radius: 10px;
  overflow: hidden;
  width: 200px;
  padding: 1rem;
  position: relative;
  padding-bottom: 2rem;
  background-color: var(--white-0);

  > div {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 0.2rem;
    height: 4rem;
  }

  h3 {
    color: var(--grey-0);
    font-size: 1rem;
    text-align: left;
    font-weight: 400;
  }

  span {
    background-color: var(--grey-1);
    color: var(--white-0);
    font-weight: 700;
    padding: 0.2rem;
    border-radius: 5px;
    font-size: 15px;
    white-space: nowrap;
  }

  p {
    font-size: 10px;
    line-height: 12px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    margin-bottom: 1rem;
  }

  > img {
    width: 70%;
    height: 7rem;
  }
`;

export const ButtonBuy = styled.button`
  background-color: var(--primary-color);
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2rem;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  color: var(--white-0);
`;
