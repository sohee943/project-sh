import React, { useState } from 'react';

function TestTsx(props:string){
    const [mes, setmes] = useState('hello world!');
    const welcom = function(){
        setmes('welcom to typescript')
    };
    return(
        <div>
            {mes}
            <button onClick={welcom}>welcom</button>
        </div>
    )
}

export default TestTsx