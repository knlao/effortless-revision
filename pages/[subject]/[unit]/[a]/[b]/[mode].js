import Link from 'next/link';
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react';
import Head from 'next/head'

import useFetch from '../../../../../src/functions/useFetch';
import Choices from '../../../../../src/components/choices';
import Blanks from '../../../../../src/components/blanks';

function App() {
  const router = useRouter()
  const { subject, unit, a, b, mode } = router.query

  const [apiLink, setApiLink] = useState("");

  useEffect(() => {
    setApiLink("/api/" + subject + "/" + unit);
    // setApiLink("http://localhost:3000" + "/api/" + subject + "/" + unit);
  }, [subject, unit]);

  const { data, isPending, error } = useFetch(apiLink);

  let content = null;
  if (mode === "choices") {
    content = <Choices words={data} a={a} b={b}></Choices>;
  } else if (mode === "blanks") {
    content = <Blanks words={data} a={a} b={b}></Blanks>
  } else {
    content = <div>not found</div>
  }

  return (
    <div>
        { error && <div>{ error }</div> }
        { isPending && <div>Loading...</div> }
        { data && content }

        <Head><title>{unit} - Effortless Revision</title></Head>

        <br></br><br></br>
        <div className='text-gray-400 text-xs'>
          <p className='font-bold text-sm'>Debug info</p>
          <p><span className='font-bold'>Subject:</span> {subject}</p>
          <p><span className='font-bold'>Unit:</span> {unit}</p>
          <p><span className='font-bold'>Question:</span> {a}</p>
          <p><span className='font-bold'>Answer:</span> {b}</p>
          <p><span className='font-bold'>Mode:</span> {mode}</p>
          <p><span className='font-bold'>API Link:</span> <span className="underline"><a href={apiLink} target='_blank' rel="noreferrer">{apiLink}</a></span></p>
        </div>
    </div>
  )
}

export default App;
