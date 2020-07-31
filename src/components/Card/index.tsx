import React from 'react';

import { Container } from './style';

interface CardProps {
  title: string;
}

// eslint-disable-next-line react/prop-types
const Card: React.FC<CardProps> = ({ title }) => {
  return (
    <Container>
      <p>{title}</p>
    </Container>
  );
};

export default Card;
