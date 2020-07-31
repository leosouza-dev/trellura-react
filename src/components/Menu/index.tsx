import React from 'react';

import { Header } from './style';

const Menu: React.FC = () => {
  return (
    <Header>
      <h1>
        <a href="/">Trellura</a>
      </h1>

      <div>2 pessoas</div>
    </Header>
  );
};

export default Menu;
