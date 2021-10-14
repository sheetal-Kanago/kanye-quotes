
const h4Quote = document.querySelector('#quote');

const getQuote =() => {
  console.log("In getQuote");
  return fetch('https://api.kanye.rest')
    .then (res => res.json())
    // .then(json => console.log(json))
    .then(json => h4Quote.innerHTML=json.quote)
    .catch(err => console.log(err))
}

