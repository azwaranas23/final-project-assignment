import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import fetchArticlesByKeyword from '../api/api';
import ArticleCard from '../components/articleCard';

const SearchResults = () => {
  const { query } = useParams();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true);
      try {
        const results = await fetchArticlesByKeyword(query);
        setArticles(results || []);
      } catch (error) {
        console.error('Error fetching articles:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, [query]);

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Search Results for "{query}"
      </h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.length > 0 ? (
            articles.map((article, index) => (
              <ArticleCard key={index} article={article} />
            ))
          ) : (
            <p className="text-lg text-gray-600">
              No articles found for "{query}".
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchResults;
