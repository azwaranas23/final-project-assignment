import React, { useState, useEffect } from 'react';
import fetchArticlesByKeyword from '../api/api';
import ArticleList from '../components/articleList';

const ProgrammingPage = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProgrammingArticles = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const programmingArticles = await fetchArticlesByKeyword('Programming');
        setArticles(programmingArticles);
      } catch (err) {
        setError('Failed to fetch articles. Please try again later.');
        console.error('Error fetching articles:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProgrammingArticles();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Programming News</h1>
      {isLoading && <div className="text-center">Loading...</div>}
      {error && <div className="text-center text-red-500">{error}</div>}
      {!isLoading && !error && <ArticleList articles={articles} />}
    </div>
  );
};

export default ProgrammingPage;