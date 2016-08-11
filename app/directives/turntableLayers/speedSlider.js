function addSpeedSlider(stage, baseGroup, layer, params, disc) {
   var group = new Konva.Group({
            x: 373,
            y: 164
        });

    var speedSliderBase = new Konva.Image({
        x: 0,
        y: 0,
        image: params.speedBase,
        width: 41,
        height: 154
    });

    var yoffset = 15;

    var minVal = group.attrs.y + 18 + yoffset;
    var maxVal = group.attrs.y + speedSliderBase.attrs.height - 12 + yoffset;

    var speedPercentage = 0;

    var speedSliderButton = new Konva.Image({

        x: 29,
        y: 77,
        image: params.speedButton,
        width: 31,
        height: 32,

        offset: {
            x: 15,
            y: yoffset
        },

        draggable: true,




        dragBoundFunc: function (pos) {

            ypos = pos.y;

            if(ypos <= minVal)
                ypos = minVal;

            if(ypos >= maxVal)
                ypos = maxVal;


            var pos = ypos - minVal;
            var size = maxVal - minVal;

            var perc = pos/size * 100;

            perc -= 50;

            speedPercentage = perc;

            if(params.updateSpeed)
                params.updateSpeed((-perc)/100);

            return {
                y: ypos,
                x: this.getAbsolutePosition().x,
              /*  angularSpeed: angularSpeed*/

            }
        }


    });




speedSliderButton.on('mousemove', function(){

    var ypos = 0;
    if (ypos == 200) {

      disc.changeSpeed(90);
    }

    else if (ypos == 320){

        disc.changeSpeed(-90)

    }

});



    group.add(speedSliderBase);
    group.add(speedSliderButton);

    /*var pressed = false;*/

    baseGroup.add(group);

    return {
        speedPercentage: speedPercentage
    }
}
