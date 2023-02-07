import useFetch from "./useFetch";

function Units() {
    let content = null;

    const { data } = useFetch("http://localhost:3000/api/");

    return (
        <div></div>
    );
}

export default Units;