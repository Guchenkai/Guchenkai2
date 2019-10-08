var view = {
  displayMessage:function(mag){
    var messageArea = document.getElementById("messageArea"); 
    messageArea.innerHTML = mag;
  },
  displayHit:function(location){
  //(model.ships[1].locations)
    var cell = document.getElementById(location);
    cell.setAttribute("class","hit");
    },
  displayMiss:function(location){
    var cell = document.getElementById(location);
    cell.setAttribute("class","miss");
  }
};


var model = {
  boardSize:7,
  numship:3,
  shipLength:3,
  shipsSunk:0,
  ships:[
    {locations:["0","0","0"],hits:["","",""],issunk:false},
    {locations:["0","0","0"],hits:["","",""],issunk:false},
    {locations:["0","0","0"],hits:["","",""],issunk:false},
  ],

  fire: function(guess){
    for(var i = 0;i < this.ships.length; i++){
      var ship = this.ships[i];
      var index = ship.locations.indexOf(guess);
      if(index >= 0){
        // for(var i = 0;i < this.ships.length; i++){
        //   view.displayHit(ship.locations[i])
        // }
        ship.hits[index] = "hit";
        view.displayHit(guess); 
        view.displayMessage("HIT!"); 
        if(this.isSunk(ship)){
          view.displayMessage("You sank my battleship!"); 
          this.shipsSunk++;
          for(var i = 0;i < this.shipLength;i++){
            var n = document.getElementById(ship.locations[i]).onclick = null
          }
        }
        return true;
      }
    }
    view.displayMiss(guess); 
    view.displayMessage("You missed."); 
    return false
  },

  isSunk:function(ship){
    var connt = 0;
    for(var i = 0;i < this.shipLength; i++){
      if(ship.hits[i] === "hit"){
        connt++
        for(var f= 0;f < this.shipLength;f++){
          view.displayHit(ship.locations[f])
          var IT = document.getElementById(event.target.id)
          IT.style.backgroundImage='url(matter/boom4.png)'
        }
      }
      if(this.shipLength * 0.66 < connt){
        for(var f= 0;f < this.shipLength;f++){
          var changecolor = document.getElementById(ship.locations[f])
          changecolor.style.backgroundImage='url(matter/boom4.png)'
        }
        return true
      }
    }
  },

  generateShipLocations:function(){
    var locations;
    for (var i = 0; i < this.ships.length; i++){
        do{
          locations = this.generateShip();
        } while (this.collision(locations));
        this.ships[i].locations = locations;

    }
  },

  generateShip:function(){
    var direction = Math.floor(Math.random() * 2)
    var row, col;
        if (direction === 1){
          row = Math.floor(Math.random() * this.boardSize);
          col = Math.floor(Math.random() * (this.boardSize - this.shipLength));
        } else {
          row = Math.floor(Math.random() * (this.boardSize - this.shipLength));
          col = Math.floor(Math.random() * this.boardSize);
        }
        var newShipLocations = [];
        for (var i = 0; i < this.shipLength; i++){
          if(direction === 1){
            newShipLocations.push(row + "" + (col + i));
          } else {
            newShipLocations.push((row + i) + "" + col);
          }
        }
        return newShipLocations;
  },

  collision:function(locations){
    for (var i = 0; i < this.numship; i++){
      var ship = model.ships[i];
      for (var j = 0; j<locations.length; j++){
        if (ship.locations.indexOf(locations[j]) >= 0){
          return true;
        }
      }
    }
    return false
  },
};

var controller = {
  guesses:0,
  processGuess:function(e){
      location = e.target.id
     var location = e.target.id // parseGuess(guess);
    if(location){
      controller.guesses++;
      var hit = model.fire(location);
      if( model.shipsSunk === model.ships.length){
        alert("You sank all my battleships, in " + controller.guesses + " guesses");
      }
    }
  }
};

function parseGuess(guess){
  var alphabet = ["A" ,"B","C","D","E","F","G"];
  if(guess === null || guess.length !==2){
    alert("Oops, please enter a letter and a number on the board.")
  } else{
    firstChar = guess.charAt(0)
    var row = alphabet.indexOf(firstChar);

    var column = guess.charAt(1)
    if(isNaN(row) || isNaN(column)){
      alert("Oops, that isn't on the board.");
    } else if (row < 0 || row >= model.boardSize || column < 0 || column >= model.boardSize){
      alert("Oops, that's off the board!");
    } else {
      return row +column;
    }
  }
  return null;
}

function init(){
  var ele = document.getElementsByTagName("td");
  for(var i = 0;i < ele.length;i++){
    ele[i].onclick = controller.processGuess
  }
  var fireButton = document.getElementById("fireButton");
  fireButton.onclick = handleFireButton;
  var guessInput = document.getElementById("guessInput");
  guessInput.onkeypress = handleKetpress;

  model.generateShipLocations();
}



  function handleFireButton(){
    var guessInput = document.getElementById("guessInput");
    var e = guessInput.value;
    controller.processGuess(guess);
    guessInput.value = "";
  }

  function handleKetpress(e){
    var fireButton = document.getElementById("fireButton");
    if (e.keyCode === 13){
      fireButton.click();
      return false;
    }
  }



window.onload = init;