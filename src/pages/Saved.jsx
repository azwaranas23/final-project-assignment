import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Saved = () => {
  const [savedArticles, setSavedArticles] = useState([]);

  // Function to get saved articles from local storage
  const getSavedArticles = () => {
    const saved = localStorage.getItem('savedArticles');
    if (saved) {
      setSavedArticles(JSON.parse(saved));
    }
  };

  // Function to remove article from saved list
  const removeArticle = (index) => {
    const updatedSavedArticles = [...savedArticles];
    updatedSavedArticles.splice(index, 1);
    setSavedArticles(updatedSavedArticles);
    localStorage.setItem('savedArticles', JSON.stringify(updatedSavedArticles));
  };

  // Fetch saved articles when the component mounts
  React.useEffect(() => {
    getSavedArticles();
  }, []);

  return (
    <div className="container">
      <h1 className="title">Saved Articles</h1>
      <div className="saved-articles">
        {savedArticles.length > 0 ? (
          savedArticles.map((article, index) => (
            <div key={index} className="saved-article">
              <Link to={`/article/${article.id}`}>
                <h2>{article.title}</h2>
              </Link>
              <p>{article.description}</p>
              <button onClick={() => removeArticle(index)}>
                Remove
              </button>
            </div>
          ))
        ) : (
          <p>You have no saved articles yet.</p>
        )}
      </div>
    </div>
  );
};

export default Saved;