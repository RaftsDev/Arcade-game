// Enemies our player must avoid
var Enemy = function(x,y,speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
    this.speed = speed;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


// Now write your own player class
// This class requires an update(), render() andchar-princess-girl
// a handleInput() method.

var Player = function(){
  this.x = 200;
  this.y = 325;
  this.speed = 100;
  this.sprite = 'images/char-princess-girl.png';
  this.handleInput = function(key){
    switch(key){
      case "up":this.y-=83;
           break;
      case "down":this.y+=83;
           break;
      case "left":this.x-=75;
           break;
      case "right":this.x+=75;
           break;
    }
  }
};

Player.prototype.update = function(dt){

};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});


var enemy1 = new Enemy(0,75,100);
var enemy2 = new Enemy(50,150,100);
var enemy3 = new Enemy(100,230,100);
var allEnemies = [enemy1,enemy2,enemy3];

var player = new Player();
