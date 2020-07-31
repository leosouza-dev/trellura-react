import styled from 'styled-components';
import { shade } from 'polished';

export const Header = styled.header`
  background: #2a7ae4;
  font: 25px Satisfy, sans-serif;

  text-align: center;
  padding: 8px;

  a {
    text-decoration: none;
    color: ${shade(0.1, 'white')};

    &:hover {
      color: white;
    }
  }

  div {
    color: white;
    font: 20px Roboto, sans-serif;

    position: absolute;
    top: 30px;
    right: 30px;
  }
`;
