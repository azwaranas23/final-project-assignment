import React from "react";
import { useState } from "react";

const Saved = () => {
  const [savedArticles, setSavedArticles] = useState([]);

  const getSavedArticles = () => {
    const saved = localStorage.getItem("savedArticles");
    if (saved) {
      setSavedArticles(JSON.parse(saved));
    }
  };

  const removeArticle = (index) => {
    const updatedSavedArticles = [...savedArticles];
    updatedSavedArticles.splice(index, 1);
    setSavedArticles(updatedSavedArticles);
    localStorage.setItem("savedArticles", JSON.stringify(updatedSavedArticles));
  };

  React.useEffect(() => {
    getSavedArticles();
  }, []);

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Saved Articles</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {savedArticles.length > 0 ? (
          savedArticles.map((article, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden mb-4 p-4"
            >
              <div className="text-sm text-gray-600 mb-2">{article.source}</div>
              <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
              <p className="text-sm text-gray-600 mb-4">
                {article.description}
              </p>
              <div className="flex justify-between items-center mt-4">
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                >
                  News Page
                </a>
                <button
                  onClick={() => removeArticle(index)}
                  className="bg-white hover:bg-blue-100 text-blue-500 font-semibold py-2 px-4 border border-blue-500 rounded"
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-lg text-gray-600">
            You have no saved articles yet.
          </p>
        )}
      </div>
    </div>
  );
};

export default Saved;
