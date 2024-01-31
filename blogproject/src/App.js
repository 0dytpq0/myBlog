import React, { useState } from 'react';
import './styles/App.css';
import Login from './components/login/Login';

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleLogin = (username) => {
    setLoggedInUser(username);
  };

  return (
    <div>
      {loggedInUser ? (
        <div>
          <h2>안녕하세요, {loggedInUser}님!</h2>
          {/* 여기에 다른 컴포넌트들을 포함하여 애플리케이션의 다른 부분을 구성할 수 있습니다. */}
        </div>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
