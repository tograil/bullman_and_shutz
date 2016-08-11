function addControlLayer(stage, baseGroup, layer, params) {

    


    var controlGroup = new Konva.Group(
      {
          x: 355.5,
          y: 81.5,
          width: 109,
          height: 337,
          offset: {
              x:34,
              y:74
          }

     });

    var controlImageUpMid = new Konva.Image({

        x:0,
        y:0,
        image: params.control_high_part,

        width: 91,
        height: 139

   });

   var controlImageMidRight = new Konva.Image({

       x: 36.2,
       y: 139,
       width: 25,
       height: 116,

       image: params.control_mid_part,
       offset: {

           x: 0,
           y: 0
       },

  });

  var controlImageSmallest = new Konva.Image({

        x: 30.2,
        y: 244,
        width: 6,
        height: 11,

        image: params.control_smallest_part,
        offset: {

            x: 0,
            y: 0
        },

    });

    var controlSmallPart = new Konva.Image({

        x: 35.73,
        y: 255,
        width: 4.8,
        height: 9,

        image: params.controlSmallPart,
        offset: {

            x: 0,
            y: 0
        },

    });


 var controlImageLowLeft = new Konva.Image({
     x: -18.9,
     y: 255,
     width: 55,
     height: 84,

     image: params.control_low_part_left,
     offset: {

         x: 0,
         y: 0
     }
});



  controlGroup.add(controlImageUpMid);
  controlGroup.add(controlImageMidRight);
    controlGroup.add(controlImageSmallest);
    controlGroup.add(controlImageLowLeft);
    controlGroup.add(controlSmallPart);
    //
    //
    baseGroup.add(controlGroup);


    /*var angularSpeed = 90;
    var pos = 0;
    var animOne = new Konva.Animation(function(frame) {
        var angleDiff = frame.timeDiff * angularSpeed / 1000;
        controlGroup.rotate(angleDiff);
        pos++;
        if(pos >= 25)
            animOne.stop();
    }, layer);

    var animTwo = new Konva.Animation(function(frame) {
        var angleDiff = frame.timeDiff * -angularSpeed / 1000;
        controlGroup.rotate(angleDiff);
        pos--;
        if(pos <= 0)
            animTwo.stop();
    }, layer);



/*
control.addEventListener ('mousedown', function (){

   control = true;

})

    control.on('mousemove', function(){

          var angle = 0
              speed = 30,
              angle_max = 90*(Math.PI/180);

                   if (angle <=angle_max ) {
                   angle+= 15*(Math.PI/180);
                   control.rotate((angle*(Math.PI/180))*speed);
              }
              else if(angle >= angle_max) {
                   angle-= 15*(Math.PI/180);
                   control.rotate((angle*(Math.PI/180))*speed);

            }
            layer.batchDraw();
  });
*/

    var controlUsed = false;


    var currentPos = {
        x: 0,
        y: 0
    };

    function rotateControl(degrees) {
        controlGroup.rotation(degrees);
        layer.draw();
    }

    function lenBetweenPoints(first, next) {
        return Math.sqrt(Math.pow(first.x - next.x, 2) + Math.pow(first.y - next.y, 2));
    }

    function calculateAngle(currentPoint) {

        var center = {
            x: controlGroup.attrs.x,
            y: controlGroup.attrs.y
        }

        var dy = currentPoint.y - center.y;
        var dx = currentPoint.x - center.x;
        var theta = Math.atan2(dy, dx); // range (-PI, PI]

        theta *= 180 / Math.PI;

        theta -= 90;

        theta = Math.round(theta);

        return theta;

    }

    var currentAngle = 0;
    var topAngle = 50;


    function checkAngle(angle) {
        if(isNaN(angle))
            return false;

        if(angle > topAngle || angle < 0)
           return false;

        return true;
    }

    var anim = new Konva.Animation(function(frame) {


        if(moveToStartFlag) {

            controlGroup.rotation(currentAngle);
            anim.stop();
            moveToStartFlag = false;

        }

        controlGroup.rotation(currentAngle);

    }, layer);

    var mousePressed = false;


    controlImageLowLeft.on('mousedown.konva', function(){
        mousePressed = true;
        anim.start();
  });

    stage.on('mouseup.konva', function(){

        mousePressed =  false;
        anim.stop();
    });

    function getPositionCoord() {
        var pos = stage.getPointerPosition();
        var localPos = {
            x: pos.x - baseGroup.attrs.x,
            y: pos.y - baseGroup.attrs.y
        };

        var angle = calculateAngle(localPos, currentPos);


        if (checkAngle(angle)) {

            currentAngle = angle;

            currentPos = localPos;


        }
    }

    stage.on('mousemove.konva', function(){
        if(mousePressed)
       {
           getPositionCoord();
       }
    });

    var moveToStartFlag = false;

    function moveToStart() {
        if(currentAngle == 0 && !moveToStartFlag)
        {
            currentAngle = 22;
            moveToStartFlag = true;
            anim.start();
            //currentAngle = 25;
        }
    }


    function moveToStop() {
        if(currentAngle != 0 && !moveToStartFlag)
        {
            currentAngle = 0;
            moveToStartFlag = true;
            anim.start();
            //currentAngle = 25;
        }
    }

    var positionPercentage = 0;

    function setPosition(percentage)
    {
        var coef = percentage/100;

        var angle = 22 + (50-22)*coef;

        if(!moveToStartFlag)
        {
            currentAngle = angle;
            anim.start();
        }
    }

    function getPosition() {
        return positionPercentage;
    }

    return {
        moveToStart: moveToStart,
        stop: moveToStop,
        setPosition: setPosition,
        getPosition: getPosition
      }
  }



            // add listeners to container
            /*
          control.on('mouseup', function() {

                controlled = false;

              }, false);
*/
