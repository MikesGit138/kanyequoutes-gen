function newQuote(){
    const fetchQuotes = async() => {
        const res = await fetch('https://api.kanye.rest')
        const data = await res.json()
        if (data.quote.length > 150 ) document.querySelector('.section').style.width = '15em';
        document.querySelector('.quotes').innerHTML = data.quote
    }
    fetchQuotes()
}

fetchQuotes()