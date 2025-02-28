"use client"

import { useState, useEffect } from "react"
import "./FactChecker.css"

// Simulated server action for fact-checking
const checkFactualAccuracy = async (text) => {
  // Simulate processing delay
  await new Promise((resolve) => setTimeout(resolve, 1500))

  // This is a simplified example - in a real app, you'd use an AI service
  // or database to check facts
  const factChecks = [
    {
      text: "The Earth is the third planet from the Sun. ",
      isFactual: true,
      explanation: "Correct. Earth is the third planet from the Sun in our solar system.",
    },
    {
      text: "The Moon is made of cheese. ",
      isFactual: false,
      explanation: "Incorrect. The Moon is made primarily of rock, similar to Earth's mantle.",
    },
    {
      text: "Water boils at 100 degrees Celsius at sea level. ",
      isFactual: true,
      explanation: "Correct. At standard atmospheric pressure (sea level), water boils at 100°C (212°F).",
    },
    {
      text: "The Great Wall of China is visible from space. ",
      isFactual: false,
      explanation:
        "Incorrect. The Great Wall of China is generally not visible to the naked eye from space, contrary to popular belief.",
    },
    {
      text: "Humans have 5 senses. ",
      isFactual: false,
      explanation:
        "Partially incorrect. While the traditional model identifies 5 basic senses, humans actually have many more, including balance, temperature, pain, and proprioception.",
    },
    {
      text: "The capital of France is Paris.",
      isFactual: true,
      explanation: "Correct. Paris is indeed the capital city of France.",
    },
  ]

  return { sections: factChecks }
}

const HighlightedText = ({ section }) => {
  return (
    <span className={`highlighted-text ${section.isFactual ? "factual" : "non-factual"}`}>
      {section.text}
      <span className="tooltip" role="tooltip">
        {section.explanation}
      </span>
    </span>
  )
}

const LoadingSkeleton = () => {
  return (
    <div className="skeleton-container">
      <div className="skeleton"></div>
      <div className="skeleton"></div>
      <div className="skeleton"></div>
      <div className="skeleton" style={{ width: "80%" }}></div>
    </div>
  )
}

const FactChecker = () => {
  const [content, setContent] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchContent = async () => {
      setIsLoading(true)
      try {
        // Sample text that will be fact-checked
        const sampleText =
          "The Earth is the third planet from the Sun. The Moon is made of cheese. " +
          "Water boils at 100 degrees Celsius at sea level. The Great Wall of China is visible from space. " +
          "Humans have 5 senses. The capital of France is Paris."

        const result = await checkFactualAccuracy(sampleText)
        setContent(result)
      } catch (error) {
        console.error("Error fetching content:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchContent()
  }, [])

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
      </div>
    </div>
  )
}

export default FactChecker