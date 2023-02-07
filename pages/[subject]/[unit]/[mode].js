import Link from 'next/link';
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react';

import useFetch from '../../components/useFetch';
import MCQ from './../../components/mcq';
import FITB from '../../components/fitb';

function App() {
  const router = useRouter()
  const { mode, subject, unit } = router.query

  const [apiLink, setApiLink] = useState("");

  useEffect(() => {
    setApiLink("/api/" + subject + "/" + unit);
    // setApiLink("http://localhost:3000" + "/api/" + subject + "/" + unit);
  }, [subject, unit]);

  const { data, isPending, error } = useFetch(apiLink);

  let content = null;
  if (mode === "choices") {
    content = <MCQ words={data}></MCQ>;
  } else if (mode === "blanks") {
    content = <FITB words={data}></FITB>
  }

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
