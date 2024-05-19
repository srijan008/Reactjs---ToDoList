import React, { useState } from 'react';
import './App.css';
import btnModule from "./Button.module.css"; // Ensure this file exists and is used appropriately
import { question } from './DATA/user';

function App() {
  let [showans, setShowans] = useState(question[0].id);

  return (
    <div className="App">
      <h1 className='FAQ'>Frequently Asked Questions (FAQs)</h1>
      <div className='faqouter'>
        {question.map((faqitem, i) => (
          <div className="faqitems" key={faqitem.id}> 
            <h2 onClick={() => setShowans(faqitem.id)}>{faqitem.title}</h2>
            <p className={showans === faqitem.id ? 'activeans' : ''}>{faqitem.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
