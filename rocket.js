var Rocket = function (color, size) {
  this.color = color;
  this.size = size;
}

this.engageSecondaryEngines  = function () { 
 console.log('Secondary Engines Engaged!');
};


module.exports = Rocket;
