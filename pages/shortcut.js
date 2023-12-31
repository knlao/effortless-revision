import Link from "next/link"
import Head from "next/head"

function About() {
    return (
        <div>
            <Head><title>Shortcut - Effortless Revision</title></Head>
            <p className="text-xl font-bold">Shortcut</p>
            <p>Maybe useful links for recent tests and exams</p>
            <br></br>
            <Link className="text-l font-semibold text-blue-400 underline" href="/eng/s4-aa-unit16-vocabs/chi/eng/blanks">AA Unit 16 Vocabularies</Link>
            <br></br>
            <Link className="text-l font-semibold text-blue-400 underline" href="/chi/s4-term2-test1-quotes/first/whole">第二段第一次中文測驗名句</Link>
            <br></br>
            <Link className="text-l font-semibold text-blue-400 underline" href="/chi/s4-term2-test1-idioms/pinyin/idiom">第二段第一次中文測驗成語</Link>
            <br></br>
            <br></br>
            <Link className="text-l font-semibold text-blue-400 underline" href="/misc/fruits/a/b/blanks">Test Link Please Ignore</Link>
        </div>
    );
}

export default About;