import React from 'react';
import Button from './Button';
import Checkbox from './Checkbox';
import ItemTarefa from './ItemTarefa';

function ListaTarefas({tarefas, marcarComoConcluida, apagarTarefa}) {
    return(
        <ul>
         {tarefas.map(tarefa => (
            <ItemTarefa tarefa={tarefa} marcarComoConcluida={marcarComoConcluida} apagarTarefa={apagarTarefa}/>
         ))}
        </ul>
    );
}
export default ListaTarefas;