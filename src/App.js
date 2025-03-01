import logo from './logo.svg';
import './App.css';

import GetData from './Components/GetData';
import PostData from './Components/PostData';
import InputBox from './Components/InputBox';
import FactChecker from './Components/FactChecker';

import React, {Suspense, useState, useEffect} from 'react';

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
  
  const scrolldown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

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
          
        

        <i class="arrow down" onClick={scrolldown}></i>
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
      <img src={logo} alt="Truthflow Logo" width="72" height="72"></img>
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
