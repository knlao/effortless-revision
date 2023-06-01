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
        {/* <p>Mode: {mode}</p>
        <p>Subject: {subject}</p>
        <p>Unit: {unit}</p>
        <p>Api Link: <Link href={apiLink}>{apiLink}</Link></p> */}

        { error && <div>{ error }</div> }
        { isPending && <div>Loading...</div> }
        { data && content}
    </div>
  )
}

export default App;
