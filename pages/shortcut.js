import Link from "next/link"
import Head from "next/head"

function About() {
    return (
        <div>
            <Head><title>Shortcut - Effortless Revision</title></Head>
            <p className="text-xl font-bold">Shortcut</p>
            <p>Maybe useful links for recent tests and exams</p>
            <Link className="text-l font-semibold text-blue-400 underline" href="/eng/s4-term1-exam-adv-aa-vocabs/chi/eng/blanks">高一第一段考試進階英文AthensAnthology生字</Link>
            <br></br>
            <Link className="text-l font-semibold text-blue-400 underline" href="/eng/s4-term1-exam-adv-life-vocabs/chi/eng/blanks">高一第一段考試進階英文Life生字</Link>
            <br></br>
            <Link className="text-l font-semibold text-blue-400 underline" href="/chi/s4-term1-exam-idioms/pinyin/idiom/blanks">高一第一段中文考試成語</Link>
            <br></br>
            <Link className="text-l font-semibold text-blue-400 underline" href="/chi/s4-term1-exam-proverbs/meaning/idiom/blanks">高一第一段中文考試熟語</Link>
            <br></br>
            <Link className="text-l font-semibold text-blue-400 underline" href="/chi/s4-term1-exam-quotes/first/whole/blanks">高一第一段中文考試名句</Link>
            <br></br>
            <Link className="text-l font-semibold text-blue-400 underline" href="/chem/chemical-solubility/chemical/solubility/blanks">化學溶解性表</Link>
        </div>
    );
}

export default About;