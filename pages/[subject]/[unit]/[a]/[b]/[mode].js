import Link from 'next/link';
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react';

import useFetch from '../../../../../src/components/useFetch';
import MCQ from '../../../../../src/components/mcq';
import FITB from '../../../../../src/components/fitb';

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
    content = <MCQ words={data} a={a} b={b}></MCQ>;
  } else if (mode === "blanks") {
    content = <FITB words={data} a={a} b={b}></FITB>
  } else {
    content = <div>not found</div>
  }

  /*
    if (mode === "choices") {
    content = <MCQ words={data} a={a} b={b}></MCQ>;
  } else if (mode === "blanks") {
    content = <FITB words={data} a={a} b={b}></FITB>
  }
  */

  return (
    <div>
        { error && <div>{ error }</div> }
        { isPending && <div>Loading...</div> }
        { data && content }

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
