import Link from "next/link";

function Header() {
    return (
        <div className="bg-blue-600 py-5 sticky top-0">
            <Link className="mx-8 text-white text-xl font-bold" href="/">Effortless Revision</Link>
            <Link className="mx-4 text-white text-sm" href="/about">About</Link>
            <Link className="mx-4 text-white text-sm" href="/units">Units</Link>
        </div>
    );
}

export default Header;