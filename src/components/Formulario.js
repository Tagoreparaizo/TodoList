import React from 'react';
import Button from './Button';

function Formulario({novoTexto, setNovoTexto, adicionarTarefa}) {
    return(
        <div>    
            <input
            type="text"
            value={novoTexto}
            onChange={evento => {
                setNovoTexto(evento.target.value);
            }}
            />
            <button onClick={adicionarTarefa}>Adicionar</button>
        </div>
    );
}
export default Formulario;