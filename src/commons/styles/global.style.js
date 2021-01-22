import { createGlobalStyle } from "styled-components";
import CovidImg from "../../assets/images/covid19.png";

const globalStyle = createGlobalStyle`
  * {
    outline: none;
    box-sizing: border-box;
  }
  body{
    line-height: normal;
  }
  html, body{
    width: 100%;
    min-height: 100%;
    display: flex;
    padding: 0;
    margin: 0;
  }

  #root {
    background: url(${CovidImg});
    height: 100%;
    width: 100%;
    background-size: cover;
    background-position: center center;
  }

  .mb-2 {
    margin-bottom: 16px;
  }

  .mb-1{
    margin-bottom: 30px;
  }
  .pt-2 {
    padding-top: 16px;
  }

  .pl-2{
    padding-left: 30px;
  }

  .pr-2{
    padding-right: 30px;
  }

  .cursor {
    cursor: pointer;
  }
`;

export default globalStyle;
