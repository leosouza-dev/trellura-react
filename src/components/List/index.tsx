import React from 'react';

import { Container } from './style';
import Card from '../Card';

interface ListProps {
  title: string;
}

// eslint-disable-next-line react/prop-types
const List: React.FC<ListProps> = ({ title }) => {
  return (
    <Container>
      <h1>{title}</h1>

      <ul>
        <Card />
        <Card />
        <Card />
      </ul>

      <a href="/teste">Adicionar cartão</a>
    </Container>
  );
};

export default List;
