function addRedButton (stage, layer, params) {

    var buttonsGroup = new Konva.Group ({

         x: -130,
         y: 100


    });

    var red_btn_off = new Konva.Image ({

         x: 100,
         y: 100,
         image: params.red_Button_Off,

         width: 71,
         height: this.width + 4,



    });

    var red_btn_on = new Konva.Image ({

     x: 100,
     y: 100,
     image: params.red_Button_On,
     width: 71,
     height: this.width + 4,
     visible: false

    });


    buttonsGroup.add(red_btn_off);
    buttonsGroup.add(red_btn_on);
    red_btn_on.hide();

red_btn_off.on('mousedown', function (){

       red_btn_on.show();
       red_btn_off.hide();
       layer.draw();

});

red_btn_on.on('mousedown', function(){

       red_btn_on.hide();
       red_btn_off.show();
       layer.draw();


});



stage.add(buttonsGroup);

}
