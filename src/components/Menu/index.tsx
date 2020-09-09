/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState, useEffect } from 'react';
import * as signalR from '@microsoft/signalr';

import { Header } from './style';

const connection: signalR.HubConnection = new signalR.HubConnectionBuilder()
  // .withUrl('http://localhost:5000/trellurahub')
  .withUrl('https://trellurateste.herokuapp.com/trellurahub')
  .build();

const Menu: React.FC = () => {
  const [users, setUsers] = useState(0);

  useEffect(() => {
    connection.start().then(() => {
      console.log(`[App] connectionId = ${connection.connectionId}`);
    });
  }, []);

  connection.on('atualizarTotalUsuarios', (totalUser: number) =>
    setUsers(totalUser),
  );

  return (
    <Header>
      <h1>
        <a href="/">Trellura</a>
      </h1>

      <div>
        <span>{users} pessoas</span>
      </div>
    </Header>
  );
};

export default Menu;
