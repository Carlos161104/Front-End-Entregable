'use Client'
import React from 'react'

function Form({ setData, setName, setNumber, name, number }) {

    const handleSubmit = async (e) => {
        e.preventDefault()

        const url = 'http://localhost:9000/contactos'
        const Object = {
            name: name,
            number: number
        }

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(Object)
            });

            if (!response.ok) {
                throw new Error('Error al hacer la solicitud')
            }

            const data = await response.json()
            setData(data.status)

        } catch (error) {
            console.error('Error al hacer la solicitud: ', error)
        }
    }

    return (
        <div className={'div-formularios'}>
            <form onSubmit={handleSubmit}>
                <label>
                    Nombre:
                </label>
                <input
                    type='text'
                    name='name'
                    onChange={e => {
                        setName(e.target.value)
                    }}
                />
                <br />

                <label>
                    Número celular:
                </label>
                <br />
                <input
                    type='text'
                    name='number'
                    onChange={e => {
                        setNumber(e.target.value)
                    }}
                />
                <br />
                <button className='bg-indigo-400'>Enviar</button>

            </form>
        </div>
    )
}

export default Form
