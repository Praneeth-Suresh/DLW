import logo from './logo.svg';
import './App.css';

import GetData from './Components/GetData';
import PostData from './Components/PostData';
import InputBox from './Components/InputBox';
import FactChecker from './Components/FactChecker';

import React, {Suspense, useState} from 'react';

function App() {
  const [click, setClick] = useState(0);

  if (click === 0) {
    return (
      <HomePage 
        setClick={() => setClick(1)}
      />
    );
  } else {
    return (
      <UploadInfo
        onGoHome={() => setClick(0)}
      />
    );
  } 
}

function HomePage({setClick}) {
  // This page has index 0
  return (
      <div className="App">
          <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>
              Welcome to <code>Truthflow</code>.
          </h2>
          <p>How can we help you today.</p>

          <Suspense fallback={<p>Loading...</p>}>
              <GetData />
          </Suspense>
              
          <InputBox 
            setClick={ setClick }
          />

          </header>
      </div>
    );
}

function UploadInfo({onGoHome}) {
  // This page has index 1
  return (
    <div className="App">
      <br></br>
      <h1>
      <img src="logo192.png" alt="Truthflow Logo" width="40" height="40"></img>
        Truthflow</h1>
      <FactChecker />
    </div>
  )
}

function saveTextToFile(text, filename = "extracted_text.txt") {
  const blob = new Blob([text], { type: "text/plain" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}



export default App;
