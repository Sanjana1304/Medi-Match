import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../../src/HomePage.css';

const NewsFeed = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('https://newsapi.org/v2/everything', {
          params: {
            q: 'patient healthcare disease',
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
    <div className="flex h-[450px] card-shadow mx-auto w-[93%] rounded-custom ">
        <div
            className="w-[60%] bg-cover bg-center bg-no-repeat p-2 flex flex-col justify-end rounded-custom"
            style={{ backgroundImage: `url(/newspic2.png)` }}
        >
            <div className='rounded-full bg-red px-3 p-2 text-sm'>Featured</div>
            <a href={articles[0].url} target="_blank" rel="noopener noreferrer">
                <h2 className='text-2xl text-black'>{articles[0].title}</h2>
                <p className='text-xl '>{articles[0].description}</p>
                <p className='text-xl text-red'><small>{new Date(articles[0].publishedAt).toLocaleDateString()}</small></p>
            </a>
        </div>


        <div className="w-[40%] p-2 overflow-y-auto">
            <ul>
                {articles.map((article, index) => (
                <li key={index} className='mb-10 card-shadow rounded p-2'>
                    <a href={article.url} target="_blank" rel="noopener noreferrer">
                    <h2>{article.title}</h2>
                    <p className='text-gray'>{article.description}</p>
                    <p className='text-red'><small>{new Date(article.publishedAt).toLocaleDateString()}</small></p>
                    </a>
                </li>
                ))}
            </ul>
        </div>
    </div>
  );
};

export default NewsFeed;
