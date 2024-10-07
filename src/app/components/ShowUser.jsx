import React from 'react'

const ShowUser = ({users}) => {
    return (
        <div className='div-show'>
            <h1>Lista de Contactos</h1>
            <ul>
                {users.map((contacto, index) => (
                    <li key={index}>
                        {contacto.id} Nombre: {contacto.nombre}, Teléfono: {contacto.numero}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ShowUser
