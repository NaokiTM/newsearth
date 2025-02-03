import { useState, useEffect } from "react";

const CurrentArticle = () => {

    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchNews = async () => {
        try {
          const apiKey = import.meta.env.VITE_NEWS_API_KEY; // Use environment variables
          const response = await fetch(
            `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`
          );
          if (!response.ok) throw new Error("Failed to fetch news");
          const data = await response.json();
          setArticles(data.articles); // Update state with fetched data
        } catch (error) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
      };
  
      fetchNews();
    }, []);

  return (
    <div className="">
        {articles.map((article, index) => (
          <li key={index} className="border-b pb-2">
            <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              {article.title}
            </a>
          </li>
        ))}
    </div>
  )
}

export default CurrentArticle