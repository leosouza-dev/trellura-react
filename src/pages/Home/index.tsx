import React from 'react';
// import { Link } from 'react-router-dom';

import { Form, Mensagem } from './style';
import Menu from '../../components/Menu';

const Repository: React.FC = () => {
  return (
    <>
      <Menu />

      <Mensagem>Bem vinda/o ao Trellura!</Mensagem>

      <Form>
        <h1>Entrar no Board</h1>
        <input type="text" placeholder="Digite o seu nome" />
        <button type="submit">Entrar</button>
      </Form>
    </>
  );
};

export default Repository;
