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
    "Cada um dá o que tem.",
    "Calar é prata, falar é ouro.",
    "Cavalo dado não se olha os dentes.",
    "Deus ajuda quem cedo madruga.",
    "É melhor ser cabeça de lagartixa do que rabo de jacaré.",
    "Mais vale um gosto do que o dinheiro no bolso.",
    "O combinado não é caro nem barato.",
    "O dia que passa não volta mais.",
    "O Diabo enfeitou tanto os olhos do filho, que até furou.",
    "O seguro morreu de velho.",
    "O vagabundo trabalha dobrado.",
    "Para bom entendedor pingo é letra.",
    "Quem avisa amigo é.",
    "Quem conta um conto, aumenta um ponto.",
    "Quem fala muito, dá bom dia para o cavalo.",
    "Quem fala o que quer, ouve o que não quer.",
    "Quem faz mal feito faz duas vezes.",
    "Quem muito quer nada tem.",
    "Quem não tem a cabeça, tem as pernas.",
    "Quem não tem vergonha todo mundo é seu.",
    "Quem quer faz, quem não quer manda.",
    "Quem tem medo da derrota não tem força pra vencer.",
    "Um homem prevenido vale por dois."      
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