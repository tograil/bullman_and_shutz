var app = angular.module('tt', ['ngAudio']);

app.value('imagePath', 'app/img/');

app.value('images', {

    background: 'base.png',
    disk: 'plastinka.png',
    control_high_part: 'control_high_part.png',
    control_mid_part: 'control_mid_right_part.png',
    control_smallest_part: 'control_mid_left_small.png',
    control_low_part_left: 'control_low_left_part.png',
    controlSmallPart: 'control_mid_right_small.png',
    playOn: 'start_on.png',
    playOff: 'start.png',
    speed33On: 'bttn_33_on.png',
    speed33Off: 'bttn_33.png',
    speed45On: 'bttn_45_on.png',
    speed45Off: 'bttn_45.png',
    speedSlider: 'slider_base.png',
    speedSliderButton: 'slider.png',
    blueButtonOn: 'blue.png',
    blueButtonOff: 'blue_off.png',
    redButtonOn: 'red.png',
    redButtonOff: 'red_off.png',
    sound_Wave: 'sound-wave.png',
    sound_Wave_Control: 'sound-wave-controll.png',
    sound_Wave_Cont_Btn: 'sound-wave-controll-btn.png',



    /*powerOn: 'btn-power-on.png',
    powerOff: 'btn-power-off.png',
    soundWave: 'sound-wave.png',
    soundWaveControl: 'sound-wave-controll.png',
    soundWaveControlBtn: 'sound-wave-control-btn.png'*/
});

app.factory('loadedImages', ['$q', 'imagePath', 'images', function ($q, imagePath, images) {
    var loadedImages = [];

    function loadImages() {
        var imagesDeffered = $q.defer();

        var imagesCount = Object.keys(images).length;
        var loadedImagesCount = 0;

        for(var imageName in images)
        {
            createImage(imageName);
        }

        function createImage(imageName) {
            var image = new Image();
            image.onload = function () {
                loadedImages[imageName] = image;
                loadedImagesCount++;
                if(loadedImagesCount >= imagesCount)
                {
                    imagesDeffered.resolve(loadedImages);
                }
            };

            image.src = imagePath + images[imageName];
        }

        return imagesDeffered.promise;
    }

    return {
        loadImages: loadImages
    }

}]);

/*
app.contoller('playlistContr',['$scope', function($scope){

       $scope.songs

}])

*/
