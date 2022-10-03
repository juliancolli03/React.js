import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import React from 'react';
import { useState } from 'react';

import { db } from '../firebase/firebase';

const Form = ({ handleId }) => {
    const [nombre, setNombre] = useState('');
    const [telefono, setTelefono] = useState('');
    

    const handleSubmit = (e) => {
        e.preventDefault();
        const orden = {
            buyer: { nombre, telefono },
            date: serverTimestamp(),
            
        };
        const refOrden = collection(db, 'orders');
        addDoc(refOrden, orden).then((res) => {
            handleId(res.id);
        });
    };

    const handleNombre = (e) => setNombre(e.target.value);

    const handleTelefono = (e) => setTelefono(e.target.value);

    return (
        <div className='carrot'>
        <form action="" 
        onSubmit={handleSubmit}>
            <input
            className='form-control'
                type="text"
                name="nombre"
                placeholder="Nombre Completo"
                value={nombre}
             onChange={handleNombre}
                required
            />
            <input
            className='form-control'
                type="number"
                name="telefono"
                placeholder="Telefono"
                value={telefono}
                onChange={handleTelefono}
            />
            <button className='btn btn-primary'>Enviar</button>
        
            </form>
            </div>
    );
};

export default Form;