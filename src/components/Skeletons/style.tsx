import styled from "styled-components";


export const SkeletonCard = styled.div`

box-shadow: 0px 2px 8px 0px #00000022;
  border-radius: 10px;
  overflow: hidden;
  width: 200px;
  padding: 0.5rem;
  position: relative;
  padding-bottom: 2rem;
  background-color: var(--white-0);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 0.2rem;
    height: 3rem;
  }

  
  span {
    font-weight: 700;
    padding: 0.2rem;
    font-size: 15px;
  }

  p {
    font-size: 10px;
    line-height: 12px;
    margin-bottom: 1rem;
  }

`