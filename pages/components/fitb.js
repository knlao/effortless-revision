import React, { useState, useEffect } from 'react';
import randomizeArray from './randomizeArray';

function FITB(props) {
  const [message, setMessage] = useState(" ");

  const [correct, setCorrect] = useState(0);
  const [incorrect, setIncorrect] = useState(0);
  const [total, setTotal] = useState(0);
  const [input, setInput] = useState("");
  
  const [definition, setDefinition] = useState('');
  const [word, setWord] = useState('');

  const [lastAttempt, setLastAttempt] = useState(false);
  
  useEffect(() => {
    const words = randomizeArray(props.words);

    setDefinition(words[0].definition)
    setWord(words[0].word)

    setInput('')
  }, [total, props]);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(input);
    if (input === word) {
      setLastAttempt(true);
      setMessage("You got the correct answer!");
      setCorrect(correct + 1);
    } else {
      setLastAttempt(false);
      setMessage("You are wrong! The correct answer is " + word);
      setIncorrect(incorrect + 1);
    }
    setTotal(total + 1);
  }

  function handleChange(e) {
    setInput(e.target.value);
  }

  return (
    <div>
      <h1 className="text-3xl font-bold pb-3">Question: {definition}</h1>

      <form onSubmit={handleSubmit}>
        <input type="text" value={input} onChange={handleChange} className="border-solid border-2 border-b-black w-full py-1" />
      </form>
      
      <p className={`${lastAttempt === true ? "text-green-500" : "text-red-600"}`}>{ message }</p>
      <p>Total: {total}</p>
      <p>Correct: {correct}</p>
      <p>Wrong: {incorrect}</p>
    </div>
  );
}

export default FITB;
