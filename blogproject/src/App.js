import React, { useState } from 'react';
import './styles/App.css';
import PostList from './components/board/PostList';
import Button from './components/buttons/Button';

function App() {
  return (
    <div>
      <PostList />
      <Button />
    </div>
  );
}

export default App;
