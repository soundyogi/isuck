var marked = require('marked')
var request = require("request")


window.onload = function(){
  
  var hash = location.hash.split("#")
  
  request("/topic/"+hash[1]+".md", function(err,b,data){
    console.log(arguments)
    if(err) return index()
    fill_article(data)
  })

}


function fill_article(data){
  var article = document.createElement("article") 
  article.classList.add("markdown-body");
  article.innerHTML = marked(data)
  document.body.appendafter(article)
}


function index(){
  request("/readme.md", function(err,b,data){
    console.log(arguments)
    fill_article(data)
  })
}