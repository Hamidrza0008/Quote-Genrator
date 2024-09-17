const api_Url = "https://api.quotable.io/random";
const quote = document.getElementById("quote");
const author = document.getElementById("author");

async function GetQuote(Url) {
    const response = await fetch(Url);
    var data = await response.json();
    quote.innerHTML = data.content;
    author.innerHTML = data.author;
}

function tweet(){
    window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML + "______by" + author.innerHTML ,"Tweet window", "height=300px" , "width = 600px");
}
GetQuote(api_Url);