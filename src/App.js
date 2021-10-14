import React from 'react';
import './App.css';

import AddButton from './components/UI/button/AddButton';
import DeleteButton from './components/UI/button/DeleteButton';

function App() {
  return (
    <div>
      <h1>hello</h1>
      <AddButton>Hello</AddButton>
      <DeleteButton>By</DeleteButton>
    </div>
  );
}

export default App;
