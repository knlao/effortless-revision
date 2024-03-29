import React, { useState, useEffect } from 'react';
import randomizeArray from '../functions/randomizeArray';
import weightedRandomizeArray from '../functions/weightedRandomizeArray';

function Blanks(props) {
  const [message, setMessage] = useState(" ");

  const [correct, setCorrect] = useState(0);
  const [incorrect, setIncorrect] = useState(0);
  const [total, setTotal] = useState(0);
  const [input, setInput] = useState("");

  const [definition, setDefinition] = useState('');
  const [word, setWord] = useState('');

  const [lastAttempt, setLastAttempt] = useState(0); // 1: correct; 0: wrong; -1: skipped

  const [prevQuestion, setPrevQuestion] = useState("");
  const [prevCorrectAns, setPrevCorrectAns] = useState("");
  const [prevUserAns, setPrevUserAns] = useState("");
  const [prevWordWeight, setPrevWordWeight] = useState(0);

  const [wordsWeight, setWordsWeight] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const a = props.a;
  const b = props.b;

  // const weightChange = 2;
  const [weightChange, setWeightChange] = useState(0);
  const weightChangePercentage = 3;

  useEffect(() => {
    // const words = randomizeArray(props.words);
    if (wordsWeight.length == 0 && props.words.length != 0) {
      setWeightChange(props.words.length * weightChangePercentage);
      let w = props.words.length * weightChangePercentage;
      for (let i = 0; i < props.words.length; i++) {
        wordsWeight.push(1 + w * 3);
      }
    }
    console.log(weightChange);
    const word = weightedRandomizeArray(props.words, wordsWeight);
    setDefinition(word.item[props.a]);
    setWord(word.item[props.b]);
    setCurrentIndex(word.index);
    console.log(wordsWeight);

    // setDefinition(words[0][props.a])
    // setWord(words[0][props.b])

    setInput('');
  }, [total, props]);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(input);
    if (input.trim() === word.trim()) {
      setLastAttempt(1);
      setMessage("You got the correct answer!");
      setPrevQuestion(definition);
      setPrevCorrectAns(word);
      setPrevUserAns(input);
      setCorrect(correct + 1);
      setPrevWordWeight(wordsWeight[props.words.findIndex((e) => e.word === word)] - weightChange);

      const newWeights = wordsWeight.map((w, i) => {
        if (i === currentIndex && w - weightChange >= 1) {
          return w - weightChange;
        } else {
          return w;
        }
      });
      setWordsWeight(newWeights);
    } else if (input.trim() === "") {
      setLastAttempt(-1);
      setMessage("You skipped the question.");
      setPrevQuestion(definition);
      setPrevCorrectAns(word);
      setPrevUserAns(input);
      setPrevWordWeight(wordsWeight[props.words.findIndex((e) => e.word === word)]);
    } else {
      setLastAttempt(0);
      setMessage("You are wrong!");
      setPrevQuestion(definition);
      setPrevCorrectAns(word);
      setPrevUserAns(input);
      setIncorrect(incorrect + 1);
      setPrevWordWeight(wordsWeight[props.words.findIndex((e) => e.word === word)] + weightChange);

      const newWeights = wordsWeight.map((w, i) => {
        if (i === currentIndex) {
          return w + weightChange;
        } else {
          return w;
        }
      });
      setWordsWeight(newWeights);
    }
    setTotal(total + 1);
  }

  function handleChange(e) {
    setInput(e.target.value);
  }

  return (
    <div>
      <h1 className="text-3xl font-bold pb-3">Question: {definition} <span className="text-gray-400">({wordsWeight[props.words.findIndex((e) => e.word === word)]})</span></h1>

      <form onSubmit={handleSubmit}>
        <input type="text" value={input} onChange={handleChange} className="border-solid border-2 border-b-black w-11/12 rounded py-1" />
        <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1.5 rounded w-1/12">Go</button>
      </form>

      <p className={`${lastAttempt === 1 ? "text-green-500" : (lastAttempt === 0 ? "text-red-600" : "text-gray-400")}`}>{message}</p>

      <br></br>

      <table>
        <tbody>
          <tr>
            <td className='pr-6'>Previous Question:</td>
            <td>{prevQuestion} <span className="text-gray-400">({prevWordWeight})</span></td>
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

export default Blanks;