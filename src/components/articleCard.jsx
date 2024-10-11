import React from 'react';

const ArticleCard = ({ article }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden mb-4 p-4">
      <div className="text-sm text-gray-600 mb-2">{article.source}</div>
      <h2 className="text-xl font-semibold mb-2">{article.headline.main}</h2>
      <div className="text-sm text-gray-700 mb-2">{article.byline?.original}</div>
      <p className="text-sm text-gray-600 mb-4">{article.snippet}</p>
      <div className="flex justify-between items-center mt-4">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          News Page
        </button>
        <button className="bg-white hover:bg-blue-100 text-blue-500 font-semibold py-2 px-4 border border-blue-500 rounded">
          Save
        </button>
      </div>
    </div>
  );
};

export default ArticleCard;