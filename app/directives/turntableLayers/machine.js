function addMachineLayer(stage, image) {

    var group = new Konva.Group();

    var machine = new Konva.Image({
        x:0,
        y:0,
        image: image,
        width: 516,
        height: 391
    });

    group.add(machine);
    stage.add(group);
}
