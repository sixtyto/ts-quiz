import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
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
