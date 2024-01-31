import React, { useState } from 'react';

function Logout() {
  const [isLogin, setIsLogin] = useState(false);

  const handleLogout = () => {};

  return (
    <div>
      <button onClick={handleLogout}>로그인</button>
    </div>
  );
}

export default Logout;
