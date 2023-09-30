import { useRouter } from 'next/router'
import { useState, useEffect } from 'react';

import useFetch from '../../../src/components/useFetch';

function App() {
  const router = useRouter()
  const { subject, unit} = router.query

  const [apiLink, setApiLink] = useState("");

  useEffect(() => {
    setApiLink("/api/" + subject + "/" + unit);
    // setApiLink("http://localhost:3000" + "/api/" + subject + "/" + unit);
  }, [subject, unit]);

  const { data, isPending, error } = useFetch(apiLink);

  let content = <div>e</div>

  return (
    <div>
        { error && <div>{ error }</div> }
        { isPending && <div>Loading...</div> }
        { data && <div>
            <p className="text-xl font-bold">{"Options for 'question' and 'answer'"}</p>
            {Object.keys(data[0]).map((a, i) => (
                <p key={i}>{a}</p>
            ))}
            <br></br>
            <p className="text-2xl font-bold">! You need to type the link yourself !</p>
        </div> }

        <br></br>
    </div>
  )
}

export default App;
