import styled from "styled-components";

export const Form = styled.form`
  font-family: "Open Sans Condensed", arial, sans;
  width: 500px;
  padding: 30px;
  background: #ffffff;
  margin: 50px auto;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.22);
  -moz-box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.22);
  -webkit-box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.22);
`;

export const FormTitle = styled.h2`
  background: #30c9c9;
  text-transform: uppercase;
  font-family: "Open Sans Condensed", sans-serif;
  color: white;
  font-size: 18px;
  font-weight: 100;
  padding: 20px;
`;

export const Input = styled.input`
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  outline: none;
  display: block;
  width: 100%;
  padding: 7px;
  border: none;
  border-bottom: 1px solid #ddd;
  background: transparent;
  margin-bottom: 10px;
  font: 16px Arial, Helvetica, sans-serif;
  height: 45px;
`;

export const InputButton = styled.input`
  -moz-box-shadow: inset 0px 1px 0px 0px #45d6d6;
  -webkit-box-shadow: inset 0px 1px 0px 0px #45d6d6;
  box-shadow: inset 0px 1px 0px 0px #45d6d6;
  background-color: #2cbbbb;
  border: 1px solid #27a0a0;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: "Open Sans Condensed", sans-serif;
  font-size: 14px;
  padding: 8px 18px;
  text-decoration: none;
  text-transform: uppercase;
  &:hover {
    background: linear-gradient(to bottom, #34caca 5%, #30c9c9 100%);
    background-color: #34caca;
  }
`;