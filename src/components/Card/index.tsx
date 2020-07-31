import React, { Props } from 'react';

import { Container } from './style';

const Card: React.FC = () => {
  return (
    <Container>
      {/* <p>{title}</p> */}
      <p>Tarefa para ser realizada</p>
    </Container>
  );
};

export default Card;
