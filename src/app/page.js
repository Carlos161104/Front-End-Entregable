'use client';
import React, { useState } from "react";
import AppName from "./components/AppName";
import Form from "./components/Form";
import Search from "./components/Search";
import ShowUser from "./components/ShowUser";

export default function Home() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [data, setData] = useState('');
  const [users, setUsers] = useState([]);
  return (
    <div className='div-body'>
      <AppName />

      <div className='div-formularios'>
        <div>
          <h1>Registro nuevo usuario</h1>
          <Form
            setData={setData}
            setName={setName}
            setNumber={setNumber}
            name={name}
            number={number}
          />

          <h1>{data === 'correcto' ? 'Datos ingresados correctamente' : ' '}</h1>
        </div>

        <div className='div-search'>
          <h1>Buscar usuario</h1>
          <Search
            setUsers={setUsers}
            users={users}
          />
        </div>
      </div>

      <ShowUser
        users={users}
      />


    </div>
  );
}
