import GithubIcon from "./githubIcon";

function Footer() {
    return (

        <div className="bg-blue-600 py-3 flex justify-center items-center gap-6 mt-auto">
            <a href="https://www.github.com/knlao/quizzz" className="text-white text-sm">Open source on GitHub</a>
            <a href="https://www.github.com/knlao/quizzz"><GithubIcon></GithubIcon></a>
        </div>
    )
}

export default Footer;