import React, { useEffect, useState } from 'react';
import api from '../services/api';

const QuizView = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    api.get('/questions').then((response) => {
      setQuestions(response.data);
    });
  }, []);

  return (
    <div>
      <h1>Quiz</h1>
      <ul>
        {questions.map((q) => (
          <li key={q.id}>{q.question}</li>
        ))}
      </ul>
    </div>
  );
};

export default QuizView;