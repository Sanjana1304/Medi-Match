import React, { useEffect, useState } from 'react';
import axios from 'axios';

const NewsFeed = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('https://newsapi.org/v2/everything', {
          params: {
            q: 'patient healthcare',
            apiKey: '3f7f7f577ed14c22919cde08aa99b507',
            sortBy: 'publishedAt',
            language: 'en',
            pageSize: 10,
          },
        });
        setArticles(response.data.articles);
      } catch (err) {
        setError('Failed to fetch news');
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Recent Healthcare News</h1>
      <ul>
        {articles.map((article, index) => (
          <li key={index} className='mb-10 border'>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              <h2>{article.title}</h2>
              <p>{article.description}</p>
              <p><small>{new Date(article.publishedAt).toLocaleDateString()}</small></p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsFeed;
