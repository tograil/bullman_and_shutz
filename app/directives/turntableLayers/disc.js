function addDiscLayer(stage, layer, image, spSlider){
    var group = new Konva.Group();

    var disc = new Konva.Image({
        x: 180,
        y: 172,

        image: image,
        width: 338,
        height: 338,

        offset: {
            x: 168.7,
            y: 163.9

          }
    });

    group.add(disc);
    stage.add(group);

    // one revolution per 4 seconds
    var angularSpeed = 45;
    var anim = new Konva.Animation(function(frame) {
        var angleDiff = frame.timeDiff * angularSpeed / 1000;
        disc.rotate(angleDiff);

    }, layer);

    function changeSpeed(speed) {

          angularSpeed = speed;
  };

/*
     function discSpeedRotation(angularSpeed){

          if (ypos = 200) {

              angularSpeed = 90;

          } else if (ypos = 320) {

            angularSpeed = -90;
          };


             /*angularSpeed = Math.sin((angularSpeed*this.ypos));
     };

*/
    return {
        start: function() {
            anim.start()
        },
        stop: function () {
            anim.stop();
        },

        changeSpeed: changeSpeed
    }

/*
  {
    discSpeedRotation: discSpeedRotation

  }
*/
}
