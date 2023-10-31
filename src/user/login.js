import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function LoginForm() {

  return (
    <div>
        <h2>Login</h2>
        <div className='github'>
          <FontAwesomeIcon icon={faGithub} className="github-icon" />
          <a href={`http://localhost:4000/oauth2/authorization/github?redirect_uri=http://localhost:3000/transactions`}>Log in with Github</a>
        </div>
        
    </div>
  );
}

export default LoginForm;