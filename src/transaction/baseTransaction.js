import React from 'react';
import { useParams } from 'react-router-dom';
import SecondMenu from '../menu/secondMenu';

function BaseTransaction() {
  const { email } = useParams();

  return (
    <div>
      <SecondMenu email={email}/>
    </div>
  );
}

export default BaseTransaction;
