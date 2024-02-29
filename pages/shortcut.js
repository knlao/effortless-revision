import Link from "next/link"
import Head from "next/head"

function About() {
    return (
        <div>
            <Head><title>Shortcut - Effortless Revision</title></Head>
            <p className="text-xl font-bold">Shortcut</p>
            <p>Maybe useful links for recent tests and exams</p>
            <br></br>
            <Link className="text-l font-semibold text-blue-400 underline" href="/eng/s4-term2-exam-adv-vocabs/definition/word/blanks">S4 2nd Term Exam Advanced English Class Vocabularies</Link>
            <br></br>
            <br></br>
            <Link className="text-l font-semibold text-blue-400 underline" href="/misc/fruits/a/b/blanks">Test Link Please Ignore</Link>
        </div>
    );
}

export default About;