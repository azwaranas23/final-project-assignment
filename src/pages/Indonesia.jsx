import React, { useState, useEffect } from 'react';
import fetchArticlesByKeyword from '../api/api';
import ArticleList from '../components/articleList';

const IndonesiaPage = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchIndonesiaArticles = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const indonesiaArticles = await fetchArticlesByKeyword('Indonesia');
        setArticles(indonesiaArticles);
      } catch (err) {
        setError('Failed to fetch articles. Please try again later.');
        console.error('Error fetching articles:', err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchIndonesiaArticles();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Indonesia News</h1>
      {isLoading && <div className="text-center">Loading...</div>}
      {error && <div className="text-center text-red-500">{error}</div>}
      {!isLoading && !error && <ArticleList articles={articles} />}
    </div>
  );
};

export default IndonesiaPage;