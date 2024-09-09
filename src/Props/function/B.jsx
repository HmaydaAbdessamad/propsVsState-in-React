import React from 'react';

//this is a function compo using a props
function B(props) {
    return (
        <div>
            <h1>
                hello {props.name}
            </h1>

        </div>
    );
}

export default B;
