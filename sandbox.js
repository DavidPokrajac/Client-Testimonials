window.onload = function(){

  // Referencicng HTML tags
  var leftArr = document.querySelector(".prev");
  var rightArr = document.querySelector(".next");
  var container = document.getElementById("container");
  var p = document.querySelector("p");

  // Creating new elements
  var h3 = document.createElement("h3");
  var img = document.createElement("img");
  var evalu = document.createElement("p");

  var arr = [];
  var i = 0;

  // Giving newly created elements ID's
  img.id = "thumbnail";
  h3.id = "username";
  evalu.id = "evaluation";
  p.id = "review";  

}
