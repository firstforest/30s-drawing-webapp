'use strict';

angular.module('30sDrawingWebappApp')
  .directive('drawing', function () {
    return {
      restrict: 'A',
      link: function postLink(scope, element) {
        var drawFlag = false;
        var oldX = 0;
        var oldY = 0;

        function draw(e) {
          if (!drawFlag) {return;}
          var x = e.offsetX;
          var y = e.offsetY;
          var context = element[0].getContext('2d');
          context.strokeStyle = 'rgba(255,0,0,1)';
          context.lineWidth = 1;
          context.beginPath();
          context.moveTo(oldX, oldY);
          context.lineTo(x, y);
          context.stroke();
          context.closePath();
          oldX = x;
          oldY = y;
        }

        element.bind('mousemove', draw);
        element.bind('mousedown', function(event) {
          drawFlag = true;
          oldX = event.offsetX;
          oldY = event.offsetY;
        });
        element.bind('mouseup', function() {
          drawFlag = false;
        });
      }
    };
  });
