//level 1
var numberOfFaces = 5;
var count = 0;
var theLeftSide = document.getElementById("leftSide");
var theRightSide = document.getElementById("rightSide");
var theBody = document.getElementsByTagName("body")[0];

function generateFaces1() {
  for(var index = 0; index < numberOfFaces; index++ ) {
    var top_position = Math.floor(Math.random()*80), left_position = Math.floor(Math.random()*80);
    var smile = document.createElement("img");
    smile.setAttribute("src", "img/smile.png");
    smile.style.top = top_position + "%";
    smile.style.left = left_position + "%";
    smile.style.width = "15%"
    theLeftSide.appendChild(smile);
    leftSideImages = theLeftSide.cloneNode(true);
    leftSideImages.removeChild(leftSideImages.lastChild);
    theRightSide.appendChild(leftSideImages);
    count++;
  }
  theLeftSide.lastChild.onclick = function levelUp(event) {
    event.stopPropagation();
    event.stopPropagation();
    while (theLeftSide.firstChild) {
      theLeftSide.removeChild(theLeftSide.firstChild);
    }
    while (theRightSide.firstChild) {
      theRightSide.removeChild(theRightSide.firstChild);
    }
    numberOfFaces += 1;
    generateFaces1();
  };
  theBody.onclick = function gameOver() {
    if(count < 6) {
        count = 0;
        alert("Game Over!\n\nYour final Score is " + count + " points!");
    }
    else{
      alert("Game Over!\n\nYour final Score is " + count + " points!");
    }


    theBody.onclick = null;
    theLeftSide.lastChild.onclick = null;
  };
};

//////////////////////////////////////////
//level 2
var numberOfFaces = 5;
var count = 0;
var theLeftSide = document.getElementById("leftSide");
var theRightSide = document.getElementById("rightSide");
var theBody = document.getElementsByTagName("body")[0];

function generateFaces2() {
  for(var index = 0; index < numberOfFaces; index++ ) {
    var top_position = Math.floor(Math.random()*80), left_position = Math.floor(Math.random()*80);
    var smile = document.createElement("img");
    smile.setAttribute("src", "img/smile.png");
    smile.style.top = top_position + "%";
    smile.style.left = left_position + "%";
    smile.style.width = "15%"
    theLeftSide.appendChild(smile);
    leftSideImages = theLeftSide.cloneNode(true);
    leftSideImages.removeChild(leftSideImages.lastChild);
    theRightSide.appendChild(leftSideImages);
    count++;
  }
  theLeftSide.lastChild.onclick = function levelUp(event) {
    event.stopPropagation();
    event.stopPropagation();
    while (theLeftSide.firstChild) {
      theLeftSide.removeChild(theLeftSide.firstChild);
    }
    while (theRightSide.firstChild) {
      theRightSide.removeChild(theRightSide.firstChild);
    }
    numberOfFaces += 2;
    generateFaces2();
  };
  theBody.onclick = function gameOver() {
    if(count < 6) {
        count = 0;
        alert("Game Over!\n\nYour final Score is " + count + " points!");
    }
    else{
      alert("Game Over!\n\nYour final Score is " + count + " points!");
    }


    theBody.onclick = null;
    theLeftSide.lastChild.onclick = null;
  };
};

/////////////////////////////////////////////

//level 3
var numberOfFaces = 5;
var count = 0;
var theLeftSide = document.getElementById("leftSide");
var theRightSide = document.getElementById("rightSide");
var theBody = document.getElementsByTagName("body")[0];

function generateFaces3() {
  for(var index = 0; index < numberOfFaces; index++ ) {
    var top_position = Math.floor(Math.random()*80), left_position = Math.floor(Math.random()*80);
    var smile = document.createElement("img");
    smile.setAttribute("src", "img/smile.png");
    smile.style.top = top_position + "%";
    smile.style.left = left_position + "%";
    smile.style.width = "15%"
    theLeftSide.appendChild(smile);
    leftSideImages = theLeftSide.cloneNode(true);
    leftSideImages.removeChild(leftSideImages.lastChild);
    theRightSide.appendChild(leftSideImages);
    count++;
  }
  theLeftSide.lastChild.onclick = function levelUp(event) {
    event.stopPropagation();
    event.stopPropagation();
    while (theLeftSide.firstChild) {
      theLeftSide.removeChild(theLeftSide.firstChild);
    }
    while (theRightSide.firstChild) {
      theRightSide.removeChild(theRightSide.firstChild);
    }
    numberOfFaces += 3;
    generateFaces3();
  };
  theBody.onclick = function gameOver() {
    var gameOver = document.createElement("div");
    gameOver.setAttribute("id", "gameOver");
    if(count < 6) {
        count = 0;
        $("#gameOver").fadeIn("slow");
        alert("Game Over!\n\nYour final Score is " + count + " points!");
    }
    else{
      $("#gameOver").fadeIn("slow");
      alert("Game Over!\n\nYour final Score is " + count + " points!");
    }


    theBody.onclick = null;
    theLeftSide.lastChild.onclick = null;
  };
};
