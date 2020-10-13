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

  // Creating a function constructor
  function Person(image, name, review, evaluation){
    this.image = `.img/customer-${image}.jpg`;
    this.name = name;
    this.review = review;
    this.evaluation = evaluation;
  }

  // Creating object instances off of function constructor
  var personOne = new Person(0, "David", "I liked the atmosphere. Everything seemed the way it should be and the crew was the best one could ever imagine.", "<span><i class='fas fa-star orange'></i><i class='fas fa-star orange'></i><i class='fas fa-star orange'></i><i class='fas fa-star orange'></i><i class='fas fa-star'></i></span>");
  var personTwo = new Person(1, "Kevin", "Kind of disappointed with their service. They didn't offer any help when I called them to say I ran out of gas on the highway.", "<span><i class='fas fa-star orange'></i><i class='fas fa-star orange'></i><i class='fas fa-star orange'></i><i class='fas fa-star'></i><i class='fas fa-star'></i></span>");
  var personThree = new Person(2, "Simon", "I did not get a refund from them. The car tire was slashed and I didn't have back up tire to replace with it, so I had to all a local mechanic to come and tow it to his garage so he could reapir it.", "<span><i class='fas fa-star orange'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i></span>");
  var personFour = new Person(3, "Mark", "As a long time customer, I can honestly say I have never had any problems with them.", "<span><i class='fas fa-star orange'></i><i class='fas fa-star orange'></i><i class='fas fa-star orange'></i><i class='fas fa-star orange'></i><i class='fas fa-star orange'></i></span>");
  var personFive = new Person(4, "Michael", "Just scheduled an appointment to them, am totally inexprienced and was told they are the best in the business.", "<span><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i></span>");

  // Storing object instances in the array
  arr = [personOne, personTwo, personThree, personFour, personFive];

  // Creating event listeners for left and right arrow
  leftArr.addEventListener("click", function(){
    // if i is 0, make it equal to the length of the arr array and then decrement it by 1 each time, by going from user with bigger index to user with 0 index
    if(i === 0){
      i = arr.length;
    }
    i--;
    h3.textContent = arr[i].name;
    p.textContent = arr[i].review;
    img.src= arr[i].image;
    img.classList.add("img");
    evalu.innerHTML = "Rating: " + arr[i].evaluation;
    container.insertBefore(h3, p);
    container.insertBefore(img, h3);
    container.appendChild(evalu);
  });

  rightArr.addEventListener("click", function(){
    // increment i by one each time, and when it is equal to 0, change its value to 0 so it could restart going form 0 again
    i++;
    if(i === arr.length){
      i = 0;
    }
    h3.textContent = arr[i].name;
    p.textContent = arr[i].review;
    img.src = arr[i].image;
    img.classList.add("img");
    evalu.innerHTML = "Rating: " + arr[i].evaluation;
    container.insertBefore(h3, p);
    container.insertBefore(img, h3);
    container.appendChild(evalu);
  });

}
