function addPowerLayer(stage, layer, params) {
    var group = new Konva.Group({
        x: 70,
        y: 50,
        offset: {
            x: 20,
            y: 20
        }
    });

    var off = new Konva.Image({
        x:0,
        y:0,
        image: params.off,
        width: 40,
        height: 40
    });

    var on = new Konva.Image({
        x:0,
        y:0,
        image: params.on,
        width: 40,
        height: 40,
        visible: false
    });

    group.add(on);
    group.add(off);

    on.hide();

    off.on('mousedown', function () {
        params.power(false);
        off.hide();
        on.show();
        layer.draw();
    });

    on.on('mousedown', function () {
        //params.stop();
        params.power(true);
        off.show();
        on.hide();
        layer.draw();
    });

    stage.add(group);

}
