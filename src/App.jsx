import React, { useState } from 'react';

function App() {
  const [atividades, setAtividades] = useState([]);
  const [nome, setNome] = useState('');
  const [dataLimite, setDataLimite] = useState('');

  const adicionarAtividade = (event) => {
    event.preventDefault();
    const novaAtividade = {
      nome: nome,
      dataLimite: dataLimite
    };
    setAtividades([...atividades, novaAtividade]);
    setNome('');
    setDataLimite('');
  }

  const removerAtividade = (index) => {
    const novasAtividades = [...atividades];
    novasAtividades.splice(index, 1);
    setAtividades(novasAtividades);
  }

  return (
    <div>
      <form onSubmit={adicionarAtividade}>
        <label htmlFor="nome">Nome da atividade:</label>
        <input type="text" id="nome" value={nome} onChange={(event) => setNome(event.target.value)} />
        <label htmlFor="dataLimite">Data limite:</label>
        <input type="date" id="dataLimite" value={dataLimite} onChange={(event) => setDataLimite(event.target.value)} />
        <button type="submit">Adicionar</button>
      </form>
      <ul>
        {atividades.map((atividade, index) => (
          <li key={index}>
            <span>{atividade.nome} - {atividade.dataLimite}</span>
            <button onClick={() => removerAtividade(index)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

