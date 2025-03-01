import React from 'react';
import './ArticleTable.css';

const articles = [
  { name: 'James D. Taiclet | Council on Foreign Relations', url: 'https://www.cfr.org/bio/james-d-taiclet', greenProgress: 66, redProgress: 78 },
  { name: 'Lockheed Martin elects James D. Taiclet as President and CEO', url: 'https://www.jeccomposites.com/news/spotted-by-jec/lockheed-martin-elects-james-d-taiclet-as-president-and-ceo/?news_type=announcement,business&end_use_application=defence-security-ballistics&exceptionaltags=people-in-composites', greenProgress: 85, redProgress: 74 },
  // Add more articles as needed
];

const ArticleTable = () => {
  return (
    <table className="article-table">
      <thead>
        <tr>
          <th style={{ width: '30%' }}>Article Name</th>
          <th style={{ width: '30%' }}>Exaggeration Metric</th>
          <th style={{ width: '40%' }}>Cross Reference Score</th>
        </tr>
      </thead>
      <tbody>
        {articles.map((article, index) => (
          <tr key={index}>
            <td
              className="article-name"
              onClick={() => window.location.href = article.url}
            >
              {article.name}
            </td>
            <td>
            <div className="progress-bar-container">
              <div className="progress-bar">
                <div className="progress green" style={{ width: `${article.greenProgress}%` }}></div>
              </div>
              <span><center>{article.greenProgress}%</center></span>
            </div>
            </td>
            <td>
            <div className="progress-bar-container">
              <div className="progress-bar">
                <div className="progress red" style={{ width: `${article.redProgress}%` }}></div>
              </div>
              <span><center>{article.redProgress}%</center></span>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ArticleTable;