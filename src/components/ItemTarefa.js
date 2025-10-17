import React from 'react';

function ItemTarefa({ tarefa, marcarComoConcluida, apagarTarefa }) {
  return (
    <li key={tarefa.id} className={tarefa.concluida ? 'concluida' : ''}>
      <input 
        type='checkbox'
        checked={tarefa.concluida}
        onChange={() => marcarComoConcluida(tarefa.id)}
      />
      {tarefa.texto} 
      <button onClick={() => apagarTarefa(tarefa.id)}>Apagar tarefa</button>
    </li>
  );
}

export default ItemTarefa;