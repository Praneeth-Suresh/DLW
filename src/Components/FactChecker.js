"use client"

import React, { useState, useEffect } from "react"
import "./FactChecker.css"

import DOMPurify from 'dompurify';

import axios from 'axios';

import Photo from './PhotoOutput.jpg';

import ArticleTable from './ArticleTable';
import ReactDOM from 'react-dom';



// Simulated server action for fact-checking
const CheckFactualAccuracy = async (setData) => {
  const HelloMessage = "Establishing GET connection.";
  const url = 'http://127.0.0.1:8000/Advisor/';

  try {
    const response = await axios.get(url, {
      params: {
        URL: HelloMessage,
      },
    });
    setData(response.data); // Update state with the received data
  } catch (error) {
    console.error('Error fetching data:', error);
    setData(null); // Optional: set data to null if there was an error
  }
};


const HighlightedText = ({ section }) => {

  const sanitizedHtmlContent = DOMPurify.sanitize(section.explanation);

  return (
    <>
    { section.fact ? (
    <span className={`highlighted-text ${section.isFactual ? "factual" : "non-factual"}`}>
      {section.text}
      <span className="tooltip" role="tooltip">
        <div
          dangerouslySetInnerHTML={{ __html: sanitizedHtmlContent }}
        />
      </span>
    </span> ) :
    (
      <span className={`highlighted-text`}>
      {section.text}
      <span className="tooltip" role="tooltip">
        We analyse only facts for you: <br></br> leaving the author to their <a href='https://medium.com/the-write-purpose/why-other-peoples-opinions-matter-f4b94b825004' target="_blank">opinions</a>.
      </span>
    </span>
    )
    }
    </>
  )
}


const LoadingSkeleton = () => {
  const statements = [
    "Hang tight! Weeding out the weeds for you!",
    "Fact-checking in action...Cultivating a more informed society!",
    "Validating key details...Promoting responsible information sharing!",
    "Examining expert opinions...Delivering well-rounded insights fresh to you!",
    "Assessing contextual accuracy...Providing a comprehensive view just for you!",
    "Evaluating source credibility...Helping you make informed decisions at the click of a button!",
    "Scanning reliable databases...Fighting misinformation together one check at a time!",
    "Cross-referencing data...Enhancing your news literacy for a better informed you!",
    "Analyzing multiple perspectives...Bringing you nothing but the truth!",
    "Comparing with trusted sources... Separating fact from fiction!"
  ];

  const randomIndex = Math.floor(Math.random() * statements.length);
  const loaderQuote = statements[randomIndex];

  return (
    <div className="skeleton-container">
      <div className="skeleton"></div>
      <div className="skeleton"></div>
      <div className="skeleton">{loaderQuote}</div>
      <div className="skeleton"></div>
      <div className="skeleton" style={{ width: "80%" }}></div>
    </div>
  )
}

const FactChecker = () => {
  const [content, setContent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState('');

  useEffect(() => {
    const fetchContent = async () => {
      setIsLoading(true);
      try {
        await CheckFactualAccuracy(setData); // This updates the state
        console.log("The data (1) from Django has been retrieved: ", data); // Logging the state data
        
        data.map((fact) => console.log(fact.text));
        setContent(data); // Set the content after data is fetched
      } catch (error) {
        console.error("Error fetching content:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchContent();
  }, [data]); // Re-run the effect whenever `data` changes

  return (
    <div className="container">
      <div className="header">
        <a href="/" className="back-link">
          <span className="arrow-left">←</span> Back to home
        </a>
      </div>

      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Fact-Checked Content</h2>
        </div>
        <div className="card-content">
          {isLoading ? (
            <LoadingSkeleton />
          ) : (
            <div className="content-text">
              {content?.sections.map((section, index) => (
                <HighlightedText key={index} section={section} />
              ))}
            </div>
          )}
        </div>
        <p> {content} </p>
      </div>
    </div>
  )
}

export default FactChecker
