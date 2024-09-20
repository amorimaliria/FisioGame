import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Perguntas() {
  const [perguntas, setPerguntas] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/questions').then((response) => {
      setPerguntas(response.data);
    });
  }, []);

  return (
    <div>
      <h2>Perguntas</h2>
      {perguntas.map((pergunta) => (
        <div key={pergunta.id}>
          <p>{pergunta.text}</p>
          <ul>
            {pergunta.options.map((option, index) => (
              <li key={index}>{option}</li>
            ))}
          </ul>
          <p>Level: {pergunta.level}</p>
        </div>
      ))}
    </div>
  );
}

export default Perguntas;
