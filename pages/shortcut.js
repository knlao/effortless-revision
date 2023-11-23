import Link from "next/link"
import Head from "next/head"

function About() {
    return (
        <div>
            <Head><title>Shortcut - Effortless Revision</title></Head>
            <p className="text-xl font-bold">Shortcut</p>
            <p>Maybe useful links for recent tests and exams</p>
            <Link className="text-l font-semibold text-blue-400 underline" href="/misc/fruits/a/b/blanks">misc/fruits</Link>
            <br></br>
            <a className="text-l font-semibold text-blue-400 underline" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">yeet</a>
        </div>
    );
}

export default About;