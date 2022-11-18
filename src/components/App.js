import React from 'react';
import './App.css';
import ItemLi from './ItemLi';
import ItemEdit from './ItemEdit';

function App() {
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      />      
      <ItemEdit></ItemEdit>
      <ItemLi></ItemLi> 
    </div>
  );
}

export default App;
