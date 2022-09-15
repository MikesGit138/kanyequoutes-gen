function newQuote(){
    const fetchQuotes = async() => {
        const res = await fetch('https://api.kanye.rest')
        const data = await res.json()
        // console.log(data.quote)
        document.querySelector('.quotes').innerHTML = data.quote
        console.log(data)
 
    }
    fetchQuotes()
}

fetchQuotes()