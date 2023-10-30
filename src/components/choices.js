import React, { useState } from 'react';
import Choice from './choice.js';
import randomizeArray from '../functions/randomizeArray.js';

function Choices(props) {
  const items = 4;
  const correctIndex = Math.floor(Math.random() * items);

  const [message, setMessage] = useState(" ");

  const [correct, setCorrect] = useState(0);
  const [incorrect, setIncorrect] = useState(0);
  const [total, setTotal] = useState(0);

  const words = randomizeArray(props.words);
  console.log(words);

  const a = props.a;
  const b = props.b;

  const [lastAttempt, setLastAttempt] = useState(false);
  
  const [prevQuestion, setPrevQuestion] = useState("");
  const [prevCorrectAns, setPrevCorrectAns] = useState("");
  const [prevUserAns, setPrevUserAns] = useState("");

  function handleSubmit(index) {
    if (index === correctIndex) {
      setLastAttempt(true);
      setMessage("You got the correct answer!");
      setPrevQuestion(words[correctIndex][a]);
      setPrevCorrectAns(words[correctIndex][b]);
      setPrevUserAns(words[index][b]);
      setCorrect(correct + 1);
    } else {
      setLastAttempt(false);
      setMessage("You are wrong!");
      setPrevQuestion(words[correctIndex][a]);
      setPrevCorrectAns(words[correctIndex][b]);
      setPrevUserAns(words[index][b]);
      setIncorrect(incorrect + 1);
    }
    setTotal(total + 1);
  }

  return (
    <div>
      <h1 className="text-3xl font-bold pb-3">Question: {words[correctIndex][a]}</h1>
      {words.filter((word, i) => i <= items - 1).map((word, i) => (
        <div key={i} className="border-2 rounded-md border-slate-500 my-4 px-3
        ">
          <Choice index={i} content={word[b]} handleSubmit={handleSubmit}></Choice>
        </div>
      ))}
      <p className={`${lastAttempt === true ? "text-green-500" : "text-red-600"}`}>{message}</p>
      
      <br></br>
      
      <table>
        <tbody>
          <tr>
            <td className='pr-6'>Previous Question:</td>
            <td>{prevQuestion}</td>
          </tr>
          <tr>
            <td>Correct Answer:</td>
            <td>{prevCorrectAns}</td>
          </tr>
          <tr>
            <td>Your Answer:</td>
            <td>{prevUserAns}</td>
          </tr>
        </tbody>
      </table>

      <br></br>

      <p>Total: {total}</p>
      <p>Correct: {correct}</p>
      <p>Wrong: {incorrect}</p>
    </div>
  );
}

export default Choices;
