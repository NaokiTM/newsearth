import { useState, useEffect } from "react";


const Headlines = () => {
    const [articles, setArticles] = useState([]);
    const [error, setError] = useState(null);
    const [index, setIndex] = useState(0);

    const nextCard = () => setIndex((prev) => (prev + 1) % articles.length);
    const prevCard = () => setIndex((prev) => (prev - 1 + articles.length) % articles.length);
  
    useEffect(() => {
      const fetchNews = async () => {
        try {
          const apiKey = import.meta.env.VITE_NEWS_API_KEY;
          const response = await fetch(
            `https://newsapi.org/v2/top-headlines?country=US&apiKey=${ apiKey }`
          );
          if (!response.ok) throw new Error("Failed to fetch news");
          const data = await response.json();
          setArticles(data.articles); // Update state with fetched data
        } catch (error) {
          setError(error.message);
        } 
      };
  
      fetchNews();
    }, []);

  return (
    <div>
        <div className="flex flex-col items-center justify-center text-red-600 text-l tracking-tight">
          <div className="text-3xl p-4 text-">US Headlines</div>

          
          {articles.length > 0 && (
            <div className="w-80 text-center p-4 shadow-lg h-[75vh] overflow-y-auto flex flex-col"> 

                {/* article title */}
                <h2 className="text-xl font-bold">{articles[index].title}</h2>

                {/* article image */}
                <img
                  src={articles[index].urlToImage}
                  alt={articles[index].title} //replace with text that indicates that its an image
                  className="w-full max-h-60 content-cover rounded-md my-2"
                />

                {/* article description */}
                <div className="pb-4 overflow-y-auto mb-2">
                   <p className="text-gray-600">{articles[index].description}</p>
                </div>

                {/* article URL */}
                <a href={articles[index].url} className="hover:underline text-blue-500">Read more on this article</a>
            </div>
          )}

          <div className="flex space-x-4 pt-8">
            <button className="cursor-pointer" onClick={prevCard}>Previous</button>
            <button className="cursor-pointer" onClick={nextCard}>Next</button>
          </div>
        </div>
    </div>
  )
}

export default Headlines