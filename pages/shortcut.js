import Link from "next/link"

function About() {
    return (
        <div>
            <p className="text-xl font-bold">Shortcut</p>
            <p>Links for recent tests and exams</p>
            <br></br>
            <Link className="text-l font-semibold text-blue-400 underline" href="/chi/s4-term1-test2-idioms/meaning/idiom/blanks">2023高一第一段第二次中文測驗熟語</Link>
            <br></br>
            <Link className="text-l font-semibold text-blue-400 underline" href="/chi/s4-term1-test2-quotes/first/whole/blanks">2023高一第一段第二次中文測驗名句</Link>
            <br></br>
            <Link className="text-l font-semibold text-blue-400 underline" href="/bio/s4-term1-bigtest-words/chi/eng/blanks">2023高一第一段生物大測英文生字</Link>
        </div>
    );
}

export default About;