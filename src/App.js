import logo from './logo.png';
import './App.css';

import InputBox from './Components/InputBox';
import FactChecker from './Components/FactChecker';

import React, {Suspense, useState, useEffect} from 'react';

function App() {
  const [click, setClick] = useState(0);
  const [URL, setURL] = useState("");

  console.log("URL:", URL, " click: ", click)

  if (click === 0) {
    return (
      <HomePage 
        setClick={() => setClick(1)}
        setURL={(url) => setURL(url)}
      />
    );
  } else {
    return (
      <UploadInfo
        onGoHome={() => setClick(0)}
        URL={ URL }
      />
    );
  } 
}

function HomePage({setClick, setURL}) {
  // This page has index 0

    
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
          <br></br>
          <p>A service for identifying fake content and news on social media.</p>
          <p> Paste URL or Upload photo of the media post/article </p>
              
          <InputBox 
            setClick={ setClick }
            setURL={ setURL }
          />
          
        

        <i class="arrow down" onClick={scrolldown}></i>
          </header>
      </div>
    );
}

function UploadInfo({onGoHome, URL}) {
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
