const TEXT = document.getElementById("text");
const NEWQUOTE = document.getElementById("chuck-norris");
const DADJOKE = document.getElementById("dad-joke");
const NEWJOKE = document.getElementById("new-joke");
const TWEET = document.getElementById("tweet-quote");
let current;


let randQuote = (clickObj) => {
  newJoke();
  }


NEWQUOTE.addEventListener("click",randQuote,false);

DADJOKE.addEventListener("click",function(){
  dadJoke();
},false);

NEWJOKE.addEventListener("click",function(){
  newOne();
},false);


function openURL(url){
  window.open(url, 'Share', 'width=550, height=400, toolbar=0, scrollbars=1 ,location=0 ,statusbar=0,menubar=0, resizable=0');
}
TWEET.addEventListener("click",()=>{
 openURL("https://twitter.com/intent/tweet?&text=" + encodeURIComponent(current))
});   
