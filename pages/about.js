import Head from "next/head"

function About() {
    return (
        <div>
            <Head><title>About - Effortless Revision</title></Head>
            <p>This is like Quizlet, but it is <span className="underline">free</span>.</p>
            <br></br>
            <p className="text-lg">About Me</p>
            <p>Hi, I am Kimi Lao, a student from Macao Pui Ching Middle School. I am currently in S4.</p>
            <p>Contact Me: 1166286-7@g.puiching.edu.mo</p>
        </div>  
    );
}

export default About;