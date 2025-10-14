import React from 'react';
import Button from './Button';
import Checkbox from './Checkbox';

function ListaTarefas({tarefas, marcarComoConcluida, apagarTarefa}) {
    return(
        <ul>
         {tarefas.map(tarefa => (
          <li key={tarefa.id} className={tarefa.concluida ? 'concluida' : ''}>
          <input type = 'checkbox'
          checked={tarefa.concluida}
          onChange={() => marcarComoConcluida(tarefa.id)}
          />
          {tarefa.texto} 
          <button onClick={() => apagarTarefa(tarefa.id)}>Apagar tarefa</button></li>
         ))}
        </ul>
    );
}
export default ListaTarefas;