import React from 'react';

function Choice(props) {
    function handleClick(e) {
        props.handleSubmit(props.index);
    }

    return (
        <div>
            <button onClick={handleClick} className="text-lg py-1 w-full text-left">Choice {props.index} - {props.content}</button>
        </div>
    )
}

export default Choice;