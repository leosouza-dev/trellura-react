import styled from 'styled-components';
import { shade } from 'polished';

export const Mensagem = styled.span`
  /* background-color: ${shade(0.2, '#04d361')}; */
  background-color: #16D377;
  color: white;
  max-width: 700px;
  font-size: 20px;
  font-weight: bold;
  padding: 10px;
  border-radius: 5px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
`;

export const Form = styled.form`
  background-color: ${shade(0.1, 'white')};
  color: #4a535a;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  border-radius: 10px;
  padding: 50px;
  text-align: center;

  input {
    margin-top: 30px;
    border: 0;
    border-radius: 5px 0 0 5px;
    height: 50px;
    width: 400px;
    padding: 0 10px;
    color: #3a3a3a;

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 150px;
    height: 50px;
    background: #04d361;
    border-radius: 0 5px 5px 0;
    border: 0;
    color: #fff;
    font-weight: bold;
    transition: background-color 200ms;

    &:hover {
      background: ${shade(0.2, '#16D377')};
    }
`;
