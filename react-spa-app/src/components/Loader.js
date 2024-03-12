import React from 'react';
import {Oval} from 'react-loader-spinner';

function Loader() {
    return (
        <div className='loader'>
            <Oval color='#00BFFF' height={50} width={50} />
        </div>
    )
}

export default Loader