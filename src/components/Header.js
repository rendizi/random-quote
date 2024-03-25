import React from "react";


export default function Header(props) {
    const [prompt, setPrompt] = React.useState("");

    function updateResults() {
        fetch(`https://api.quotable.io/search/quotes?query=${encodeURIComponent(prompt)}&fields=content`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
                if (data.results.length>0){
                props.setQuote({
                    content: data.results[0].content,
                    author: data.results[0].author
                });}
            })
            .catch(error => {
                console.error('There was a problem with your fetch operation:', error);
            });
    }

    React.useEffect(() => {
        if (prompt) {
            updateResults(prompt);
        }
    }, [prompt]);

    function handleChange(event) {
        const { value } = event.target;
        setPrompt(value);
    }

    return (
        <nav>
            <input type="text" placeholder="Search..." value={prompt} name="prompt" onChange={handleChange} />
            <div>
            </div>
        </nav>
    );
}
