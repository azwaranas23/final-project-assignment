// src/pages/Covid19.jsx
import React, { useState, useEffect } from 'react';
import fetchArticlesByKeyword from '../api/api';
import ArticleList from '../components/articleList';

const Covid19Page = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null); // State untuk menangani error

  useEffect(() => {
    const fetchCovid19Articles = async () => {
      setIsLoading(true);
      setError(null); // Reset error state
      try {
        const covid19Articles = await fetchArticlesByKeyword('Covid');
        setArticles(covid19Articles);
      } catch (err) {
        setError('Failed to fetch articles. Please try again later.');
        console.error('Error fetching articles:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCovid19Articles();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">COVID-19 News</h1>
      {isLoading && <div className="text-center">Loading...</div>}
      {error && <div className="text-center text-red-500">{error}</div>}
      {!isLoading && !error && <ArticleList articles={articles} />}
    </div>
  );
};

export default Covid19Page;