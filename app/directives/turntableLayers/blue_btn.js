function addBlueRedButton (stage, layer, params) {


    var group = new Konva.Group ({

         x: 142,
         y: 285


    });

    var blue_btn_off = new Konva.Image ({

         x: 32,
         y: -29,

         image: params.blue_Button_Off,
         width: 69,
         height: 65,



    });

    var blue_btn_on = new Konva.Image ({

     x: 32,
     y: -29,
     image: params.blue_Button_On,
     width: 69,
     height: 65,
     visible: false

});
     var red_btn_off = new Konva.Image ({

          x: -185,
          y: -85,
          image: params.red_Button_Off,

          width: 71,
          height: 95,

     });

     var red_btn_on = new Konva.Image ({

      x: -185,
      y: -85,
      image: params.red_Button_On,
      width: 71,
      height: 95,
      visible: false

     });


    group.add(blue_btn_off);
    group.add(blue_btn_on);
    group.add(red_btn_on);
    group.add(red_btn_off);
    blue_btn_on.hide();
    red_btn_on.hide();


red_btn_off.on('mousedown', function(){
params.start();
blue_btn_off.hide();
blue_btn_on.show();
red_btn_on.show();
red_btn_off.hide()
layer.draw();


});


red_btn_on.on('mousedown', function(){
params.stop();
blue_btn_on.hide();
blue_btn_off.show();
red_btn_on.hide();
red_btn_off.show();
layer.draw();

})

stage.add(group);

}
