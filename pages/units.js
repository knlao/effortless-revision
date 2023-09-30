import Link from 'next/link';

import useFetch from '../src/components/useFetch';

function About() {
    const { data, isPending, error } = useFetch("/api");

    return (
        <div className="w-1/2">
            <p className="text-xl font-bold">List of Units</p>
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {data && <div>
                <table class="w-full text-sm text-center text-gray-900">
                    <thead class="text-xs uppercase bg-gray-50">
                        <tr>
                            <th scope="col" class="py-3 px-16">Subject</th>
                            <th scope="col" class="py-3 px-16">Title</th>
                            <th scope="col" class="py-3 px-16">Year</th>
                            <th scope="col" class="py-3 px-32">Description</th>
                            <th scope="col" class="py-3 px-16">Go</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((d, i) => (
                            <tr key={i} class="bg-white border-b">
                                <td class="py-4">{d.subject}</td>
                                <td class="py-4">{d.title}</td>
                                <td class="py-4">{d.year}</td>
                                <td class="py-4">{d.description}</td>
                                <Link className="underline decoration-solid text-blue-400" href={"/" + d.subject + "/" + d.title}>Go</Link>
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