import React from 'react';

import Menu from '../../components/Menu';
import List from '../../components/List';
import { Container } from './style';

const Repository: React.FC = () => {
  return (
    <>
      <Menu />
      <Container>
        <div className="divTarefas">
          <List title="Tarefa" />
          <List title="Fazendo" />
          <List title="Testando" />
          <List title="Feito" />
        </div>
        <div>
          <List title="" />
        </div>
      </Container>
    </>
  );
};

export default Repository;
