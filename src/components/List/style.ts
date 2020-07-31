import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  background-color: #f4f5f7;
  max-width: 280px;
  padding: 10px;
  text-align: center;
  border-radius: 5px 5px 5px 5px;
  box-shadow: 0 1px 4px 0 rgba(192, 208, 230, 0.8);

  h1 {
    margin-bottom: 10px;
  }

  a {
    display: block;
    text-decoration: none;
    width: 200px;
    padding: 10px 0;
    margin: 0 auto;
    background: #04d361;
    border-radius: 5px 5px 5px 5px;
    border: 0;
    color: #fff;
    font-weight: bold;
    transition: background-color 200ms;
    font-size: 20px;

    &:hover {
      background: ${shade(0.2, '#16D377')};
    }
  }
`;
