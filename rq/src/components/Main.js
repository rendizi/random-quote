import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';

function Main(props){
    
    
      React.useEffect(() => {
        const fetchQuote = async () => {
          try {
            const res = await fetch("https://api.quotable.io/quotes/random");
            if (!res.ok) {
              throw new Error('Network response was not ok'); 
            }
            const data = await res.json();
            props.setQuote({
              content: data[0].content,
              author: data[0].author
            });
          } catch (error) {
            console.error("There was a problem with your fetch operation:", error);
          }
        };
    
        fetchQuote();
      }, []);
    
      return (
        <main>
            <div className="quote">
                <h3><FontAwesomeIcon icon={faQuoteLeft} size="sm"/>{props.quote.content} <FontAwesomeIcon icon={faQuoteRight} size="sm" /></h3>
                <h4>&copy;{props.quote.author}</h4>
            </div>
    </main>
    
      );
}

export default Main 