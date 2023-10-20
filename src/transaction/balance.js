import React from 'react';
import { useParams } from 'react-router-dom';
import SecondMenu from '../menu/secondMenu';

function Balance() {
    const { email } = useParams();

    return (
        <div>
            <SecondMenu email={email}/>
            <h2>Balance</h2>
            {/* Display balance information here */}
        </div>
    );
}
export default Balance;