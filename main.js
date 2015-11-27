var marked = require('marked')
var request = require("request")


window.onload = function(){
  if(location.hash === "") return index()
  
  var hash = location.hash.split("#")
  
  
  request("http://46.101.247.195:30000/topic/"+hash[1]+".md", function(err,b,data){
    if(data === "") return index()
    fill_article(data)
  })

}


function fill_article(data){
  var article = document.createElement("article") 
  article.classList.add("markdown-body");
  article.innerHTML = marked(data)
  document.getElementsByTagName('section')[0].appendChild(article)
}


function index(){
  request("http://46.101.247.195:30000/topic/index.md", function(err,b,data){
    console.log(arguments)
    fill_article(data)
  })
}