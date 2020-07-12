import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
html{
  height:100%;
}

body{
  background-color: #EEE;
  margin:0;
  display:flex;
  justify-content:center;
}

*{
  box-sizing:border-box;
  font-family:"Open Sans", sans-serif}
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  text-align: center;
  color: #333;
`;

export const Score = styled.p`
  color: #666;
  font-size: 2rem;
  margin: 0 0 1rem;
`;

export const StyledButton = styled.button`
  cursor: pointer;
  background: linear-gradient(160deg, #fff, #ccc);
  border: 2px solid #ddd;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  height: 40px;
  margin: 20px 0;
  padding: 0 40px;
`;
