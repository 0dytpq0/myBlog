import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // 여기서는 간단하게 유저네임과 패스워드를 확인하는 로직을 가정합니다.
    if (username === '사용자명' && password === '1234') {
      localStorage.setItem(username, password);
      onLogin(username);
    } else {
      alert('유효하지 않은 사용자명 또는 패스워드입니다.');
    }
  };

  return (
    <div>
      <h2>로그인</h2>
      <input
        type="text"
        placeholder="사용자명"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="패스워드"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>로그인</button>
    </div>
  );
};

export default Login;
