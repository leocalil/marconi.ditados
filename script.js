// Declare constants
var quoteContainer = document.getElementById('quote-container');
var quoteText = document.getElementById('quote');
var authorText = document.getElementById('author');
var twitterButton = document.getElementById('twitter');
var newQuoteButton = document.getElementById('new-quote');


/* // Get Quote From API
async function getQuote(){
    let proxyURL = 'https://cors-anywhere.herokuapp.com/';
    let apiUrl = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';
    try{
        let response = await fetch(proxyURL+apiUrl);
        let data = await response.json();
        console.log(data);       
    }catch(error){
        //getQuote();
        console.log('whoops, no quote', error)
    }
} */

var repository = [
    "Quem não tem vergonha todo mundo é seu.",
    "Quem tem boca, dá bom dia para o cavalo.",
    "É melhor ser cabeça de lagartixa do que rabo de jacaré.",
    "Quem não tem a cabeça, tem as pernas.",
    "O Diabo enfeitou tanto os olhos do filho, que até furou.",
    "O seguro morreu de velho.",
    "Mais vale um gosto do que o dinheiro no bolso.",
    "O combinado não é caro nem barato.",
    "Quem conta um conto, aumenta um ponto."    
];

// Random integer smaller than repository length;
var imax = repository.length;

// Print Marcondes Text
async function printQuote(){
    let i = Math.floor((Math.random() * imax) + 1)-1;
    let data = repository[i];
    //Reduce font size for long quotes
    if(data.length>120){
        quoteText.classList.add('long-quote');
    }else{
        quoteText.classList.remove('long-quote');
    }
    quoteText.innerText = data;
}

function tweetQuote(){
    let quote = quoteText.innerText;
    let author = authorText.innerText;
    let twitterUrl = `https://twitter.com/intent/tweet?text="${quote}" - ${author}`;
    window.open(twitterUrl, '_blank');
}

//Event Listener
newQuoteButton.addEventListener('click', printQuote);
twitterButton.addEventListener('click', tweetQuote);

// On Load
//getQuote();
printQuote();
