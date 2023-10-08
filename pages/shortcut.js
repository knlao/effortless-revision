import Link from "next/link"

function About() {
    return (
        <div>
            <p className="text-xl font-bold">Shortcut</p>
            <p>Links for recent tests and exams</p>
            <br></br>
            <Link className="text-l font-semibold text-blue-400 underline" href="/chem/chemical-solubility/chemical/solubility/blanks">2023高一第一段第一次化學測驗溶解性表</Link>
            <br></br>
            <Link className="text-l font-semibold text-blue-400 underline" href="/chem/ion-colors/ion/color/blanks">2023高一第一段第一次化學測驗離子顏色</Link>
        </div>
    );
}

export default About;