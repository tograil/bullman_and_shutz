function add3345Layer(stage, layer, params, disc) {

var group = new Konva.Group({
    x: 12,
    y: 308

});

var off33 = new Konva.Image({
    x: 51,
    y: 29,
    image: params.off33,
    width: 30,
    height: 10,


});

var on33 = new Konva.Image({
    x: 51,
    y: 29,
    image: params.on33,
    width: 30,
    height: 10,
    visible: false
});

var off45 = new Konva.Image({
    x: 80,
    y: 29,
    image: params.off45,
    width: 30,
    height: 10,
    visible: false
});

var on45 = new Konva.Image({
    x: 80,
    y: 29,
    image: params.on45,
    width: 30,
    height: 10,

});


group.add(on33);
group.add(off33);
group.add(on45);
group.add(off45);

on33.show();
    off33.hide()
off45.show();
    on45.hide();

off45.on('mousedown', function () {

    //params.start();
    off45.hide();
    on33.hide();
    off33.show();
    on45.show();
    layer.draw();
    fixedSpeed = 75;
    params.changeSpeed(fixedSpeed);


});

off33.on('mousedown', function () {
    //params.stop();
    on45.hide();
    off33.hide();
    on33.show();
    off45.show();
    layer.draw();
    fixedSpeed = 45;
    params.changeSpeed(fixedSpeed);
});


var fixedSpeed = 45;


stage.add(group);

    return {
        currentSpeed: fixedSpeed
    }

}
