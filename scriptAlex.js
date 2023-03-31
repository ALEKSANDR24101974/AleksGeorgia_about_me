$(document).ready(function() {
    'use strict';
    paper.install(window);
    paper.setup(document.getElementById('mainCanvas'));
   // var c=Shape.Circle(200,200,150);
   // c.fillColor='#556B2F';
    paper.view.draw();
console.log("DATA");
   var c;
    for (var x = 25; x < 400; x+=50) {
     for (let y = 25; y < 400; y+=50) {
       c = Shape.Circle(x,y,20);
         c.fillColor = '#556B2F';
       /* var  tool = new Tool();
    tool.onMouseDown = function (event) {
        var c = Shape.Circle(event.point.x, event.point.y, 20);
        c.fillColor = '#556B2F';*/
    }
     }   
    };
    
    
    