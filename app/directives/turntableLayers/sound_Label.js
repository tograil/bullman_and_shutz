function addSoundWaveSlider(stage, layer, params) {

   var group = new Konva.Group({

        x: 0,
        y: 0

   });

  var rect = new Konva.Rect ({

    x: 0,
    y: 0,

    width: 526,
    height: 100,
    fill: ('rgba(61, 60, 55, 0.95)'),

  });

   var soundWaveEqulizer = new Konva.Image ({

        x: 12,
        y: 10,
        image: params.sound_wave,
        width: 502,
        height: 62

   });

    var soundWaveControl = new Konva.Image({

        x: 12,
        y: 80,
        image: params.sound_wave_control,
        width: 502,
        height: 8,
        offset: {
            x: 0,
            y: 4
        }


    });


    var startPos = 14;
    var sliderLenght = 504;
    
    function updatePosition(pos, lenght) {
        var realPos = pos/lenght * (sliderLenght - startPos);
        soundWaveButton.x(startPos + realPos);
        group.draw();
    }


    var soundWaveButton = new Konva.Image({

      x: startPos,
      y: 80,

      image: params.sound_wave_cont_btn,

      width: 29,
      height: 29,

      offset: {
        x:14.5,
        y:14.5

      },

      draggable: true,

      dragBoundFunc: function (pos){

           var xpos = pos.x;

               if (xpos <= startPos)
                xpos = startPos;

           if (xpos >= 504)
                xpos = sliderLenght;


           return {

               x: xpos,
               y: this.getAbsolutePosition().y
           }
        }
    });

    group.add(rect);
    group.add(soundWaveControl);
    group.add(soundWaveButton);
    group.add(soundWaveEqulizer);

    stage.add(group);

    return {
        updatePosition: updatePosition
    }

}
