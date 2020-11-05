import 'bootstrap/dist/css/bootstrap.min.css'
import './css/App.css';

import React from 'react';
import Header from './components/Header';
import Form from './components/Form';
import LegalMentions from './components/LegalMentions';

function App() {
  return (
    <div id="app" className="App container-md">
      <div className="mx-auto card" id="main">
          <div className="card-body text-center">
            <Header />
            <Form />
          </div>
        </div>
        <LegalMentions />
    </div>
  );
}

export default App;
