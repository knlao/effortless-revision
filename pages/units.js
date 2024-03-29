import Link from 'next/link';
import Head from 'next/head'

import useFetch from '../src/functions/useFetch';

function About() {
    const { data, isPending, error } = useFetch("/api");

    return (
        <div className="w-full">
            <Head><title>Units - Effortless Revision</title></Head>
            <p className="text-xl font-bold">List of Units</p>
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {data && <div class="overflow-x-auto">
                <table class="text-sm text-center text-gray-900">
                    <thead class="text-xs uppercase bg-gray-50">
                        <tr>
                            <th scope="col" class="py-3 px-6">Subject</th>
                            <th scope="col" class="py-3 px-6">Title</th>
                            <th scope="col" class="py-3 px-6">Year</th>
                            <th scope="col" class="py-3 px-16">Description</th>
                            <th scope="col" class="py-3 px-6">Go</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((d, i) => (
                            <tr key={i} class="bg-white border-b">
                                <td class="py-4">{d.subject}</td>
                                <td class="py-4">{d.title}</td>
                                <td class="py-4">{d.year}</td>
                                <td class="py-4">{d.description}</td>
                                <td class="py-4"><Link className="underline decoration-solid text-blue-400" href={"/" + d.subject + "/" + d.title}>Go</Link></td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>}
            <br></br>
        </div>
    );
}

export default About;