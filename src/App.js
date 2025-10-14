import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import ListaTarefas from './components/ListaTarefas';
import './App.css';

function App() {

  const [tarefas, setTarefas] = useState([ ]);
  useEffect(() => {
   const tarefasGuardadas = localStorage.getItem('tarefas');
   if (tarefasGuardadas!==null) {
    setTarefas(JSON.parse(tarefasGuardadas));}
  }, [])

  const adicionarTarefa = () => {
    if (novoTexto.trim() === '') return;
    const novaLista = [...tarefas,{ id: Date.now(), texto: novoTexto, concluida: false }]
    localStorage.setItem( 'tarefas', JSON.stringify(novaLista) );
    setTarefas(novaLista);
    setNovoTexto('');
  };
  const apagarTarefa = (idParaApagar) => {
    const novaLista = tarefas.filter(tarefa => tarefa.id !== idParaApagar);
    localStorage.setItem( 'tarefas', JSON.stringify(novaLista) );
    setTarefas(novaLista);
  }
  const [novoTexto, setNovoTexto] = useState('');
  

  const marcarComoConcluida = (idParaMarcar) => {
    const novaLista = tarefas.map(tarefa => {
      if (tarefa.id === idParaMarcar) {
        return { ...tarefa, concluida: !tarefa.concluida };
      }else {
      return tarefa;
    }
    
    });
    localStorage.setItem('tarefas', JSON.stringify(novaLista));
    setTarefas(novaLista);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1><ListaTarefas tarefas={tarefas} marcarComoConcluida={marcarComoConcluida} apagarTarefa={apagarTarefa}/>
        </h1>
        <Formulario novoTexto={novoTexto} setNovoTexto={setNovoTexto} adicionarTarefa={adicionarTarefa}/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
