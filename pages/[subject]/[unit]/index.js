import { useRouter } from 'next/router'
import { useState, useEffect } from 'react';
import Head from 'next/head';

import useFetch from '../../../src/functions/useFetch';

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
        <Head><title>{unit} - Effortless Revision</title></Head>
        { error && <div>{ error }</div> }
        { isPending && <div>Loading...</div> }
        { data && <div>
            <p className="text-xl font-bold">{"Options for 'question' and 'answer'"}</p>
            {Object.keys(data[0]).map((a, i) => (
                <p key={i}>{a}</p>
            ))}
            <br></br>
            <p className="text-2xl font-bold">! You need to type the link yourself !</p>
            <br></br>
            <div class="overflow-x-auto">
                <table class="text-sm text-center text-gray-900">
                    <thead class="text-xs uppercase bg-gray-50">
                        <tr>
                          <th scope="col" class="py-3 px-6">index</th>
                            {Object.keys(data[0]).map((a, i) => (
                              <th scope="col" class="py-3 px-6" key={i}>{a}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((d, i) => (
                            <tr key={i} class="bg-white border-b">
                              <td class="py-4">{i+1}</td>
                              {Object.keys(data[0]).map((a, i) => (
                                <td class="py-4" key={i}>{d[a]}</td>
                              ))}
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
        </div> }

        <br></br>
    </div>
  )
}

export default App;
