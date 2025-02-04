import { useState, useEffect } from "react";


const Headlines = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [headlineSource, setHeadlineSource] = useState("US")

    const changeSource = (event) => {
      setHeadlineSource(event.target.value)
    }
  
    useEffect(() => {
      const fetchNews = async () => {
        try {
          const apiKey = import.meta.env.VITE_NEWS_API_KEY; // Use environment variables
          const response = await fetch(
            `https://newsapi.org/v2/top-headlines?country=${ headlineSource }&apiKey=${ apiKey }`
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
    }, [headlineSource]);

  return (
    <div className="">
        <div className="flex flex-col items-center justify-center text-red-600 text-l font-extrabold tracking-tight">
        <div className="text-5xl p-4 italic text-">US Headlines</div>
          {articles.map((article, index) => (
            <li key={index} className="border-b pb-2">
              {article.title}

              <img
                src={article.urlToImage}
                alt={article.title} //replace with text that indicates that its an image
                className="w-full max-h-60 content-cover rounded-md my-2"
              />

              <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                {article.title}
              </a>
            </li>
          ))}
        </div>
    </div>
  )
}

export default Headlines