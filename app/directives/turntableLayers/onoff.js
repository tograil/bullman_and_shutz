function addOnOffLayer(stage, layer, params) {
    var group = new Konva.Group({
        x: 65,
        y: 290,
        offset: {
            x: 54,
            y: 8
        }
    });

    var off = new Konva.Image({
        x: 0,
        y: 30,
        image: params.off,
        width: 49,
        height: 37
    });

    var on = new Konva.Image({
        x:0,
        y: 30,
        image: params.on,
        width: 49,
        height: 37,
        visible: false

    });


    var blue_btn_off = new Konva.Image ({

         x: 222,
         y: -2,
         image: params.blue_Button_Off,

         width: 69,
         height: 65,

    });

    var blue_btn_on = new Konva.Image ({

     x: 222,
     y: -2,
     image: params.blue_Button_On,

     width: 69,
     height: 65,
     visible: false

    });

     var red_btn_off = new Konva.Image ({

          x: 16,
          y: -5,
          image: params.red_Button_Off,
          width: 71,
          height: 95,
          offset: {
              x: 16,
              y: 59
          }

     });

     var red_btn_on = new Konva.Image ({

         x: 16,
         y: -5,
      image: params.red_Button_On,

      width: 71,
      height: 95,
      visible: false,
         offset: {
             x: 16,
             y: 59
         }

     });

    group.add(blue_btn_off);
    group.add(blue_btn_on);
    group.add(red_btn_on);
    group.add(red_btn_off);
    group.add(on);
    group.add(off);

    on.hide();

    var powered = true;
    var started = false;

    function start() {
        off.hide();
        on.show();
        layer.draw();
        started = true;

        if (powered) {
            params.start();
        }
    }

    off.on('mousedown', function () {



        start();



    });

    on.on('mousedown', function () {

        off.show();
        on.hide();
        layer.draw();
        started = false;

        if(powered) {
            params.stop();
        }
    });

    var angularSpeed = 45;


    red_btn_off.rotation(-45);

    function power() {
        if (started)
            params.start();
        red_btn_on.show();
        red_btn_off.hide();
        blue_btn_on.show();
        blue_btn_off.hide();
        powered = true;
        layer.draw();
    }

    red_btn_off.on('mousedown', function(){


        power();

        
    });

   red_btn_on.on('mousedown', function(){
       if(started)
            params.stop();
       red_btn_on.hide();
       red_btn_off.show();
       blue_btn_on.hide();
       blue_btn_off.show();
       powered = false;
       layer.draw();
    });

    stage.add(group);

    start();
    power();
}
