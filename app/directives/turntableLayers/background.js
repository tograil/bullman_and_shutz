function addBackgroundLayer(layer, image) {



    var background = new Konva.Image({
        x: 0,
        y: 0,
        image: image,
        width: 478,
        height: 402
    });


    layer.add(background);

    return background;
}
