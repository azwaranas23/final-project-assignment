import axios from 'axios';

const NYT_API_KEY = import.meta.env.VITE_NYT_API_KEY;
const apiUrl = 'https://api.nytimes.com/svc/search/v2';

// Simple in-memory cache
const cache = new Map();
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

// Rate limiting
let lastRequestTime = 0;
const RATE_LIMIT_DELAY = 6000; // 6 seconds between requests

const fetchArticlesByKeyword = async (keyword, page = 0) => {
  const cacheKey = `${keyword}-${page}`;
  const now = Date.now();

  // Check cache
  if (cache.has(cacheKey) && now - cache.get(cacheKey).timestamp < CACHE_DURATION) {
    return cache.get(cacheKey).data;
  }

  // Implement rate limiting
  const timeToWait = Math.max(0, RATE_LIMIT_DELAY - (now - lastRequestTime));
  if (timeToWait > 0) {
    await new Promise(resolve => setTimeout(resolve, timeToWait));
  }

  try {
    const response = await axios.get(`${apiUrl}/articlesearch.json`, {
      params: {
        'api-key': NYT_API_KEY,
        'q': keyword,
        'page': page,
        'per_page': 8,
      },
    });

    lastRequestTime = Date.now();

    if (response.status === 200 && response.data.response && response.data.response.docs) {
      // Update cache
      cache.set(cacheKey, { data: response.data.response.docs, timestamp: now });
      return response.data.response.docs;
    } else {
      console.error('Error fetching articles:', response.status);
      return [];
    }
  } catch (error) {
    if (error.response && error.response.status === 429) {
      console.error('Rate limit exceeded. Retrying after delay...');
      await new Promise(resolve => setTimeout(resolve, RATE_LIMIT_DELAY));
      return fetchArticlesByKeyword(keyword, page); // Retry
    }
    console.error('Error fetching articles:', error);
    throw error; // Propagate error to be handled by the component
  }
};

export default fetchArticlesByKeyword;