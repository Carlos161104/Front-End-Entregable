import React, { useState } from 'react'

const Search = ({ setUsers }) => {
    const [id, setId] = useState(0)
    const [param, setParam] = useState('')

    const SearchID = async (e) => {
        e.preventDefault()
        try {
            const baseUrl = 'http://localhost:9000/contactos';
            const endpoint = `/${id}`;
            const url = baseUrl + endpoint;

            const response = await fetch(url);

            if (!response.ok) {
                throw new Error(`Error al hacer la solicitud: ${response.status}`);
            }

            const data = await response.json();
            console.log(data.data)
            setUsers([data.data]);


        } catch (error) {
            console.error('Error al hacer la solicitud: ', error)
        }
    }

    const SearchParam = async (e) => {
        e.preventDefault()

        try {
            const baseUrl = 'http://localhost:9000/contactos';
            const endpoint = '/search';
            const queryParams = {
                nombre: param
            };

            const url = baseUrl + endpoint + '?' + new URLSearchParams(queryParams);
            console.log(url)
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error(`Error al hacer la solicitud: ${response.status}`);
            }

            const data = await response.json();
            console.log(data.data)
            setUsers(data.data);


        } catch (error) {
            console.error('Error al hacer la solicitud: ', error)
        }
    }

    const SearchAll = async (e) => {
        e.preventDefault()

        try {
            const url = 'http://localhost:9000/contactos';
            const response = await fetch(url);
            if (!response.status) {
                throw new Error(`Error al hacer la solicitud: ${response.status}`);
            }

            const data = await response.json();
            setUsers(data.data);
        } catch (error) {
            console.error('Error al hacer la solicitud: ', error)
        }
    }

    return (
        <div>
            <form onSubmit={SearchID}>
                <label>
                    ID de usuario:
                </label>
                <br/>
                <input
                    type='number'
                    name='ID'
                    onChange={e => {
                        setId(e.target.value)
                    }}
                />
                <button>Buscar</button>
            </form>

            <form onSubmit={SearchParam}>
                <label>
                    Por Nombre:
                </label>
                <br/>
                <input
                    type='text'
                    name='param'
                    onChange={e => {
                        setParam(e.target.value)
                    }}
                />
                <button>Buscar</button>
            </form>

            <form onSubmit={SearchAll}>
                <label>Obtener todos</label>
                <br/>
                <button>Enviar</button>
            </form>

        </div>
    )
}

export default Search
