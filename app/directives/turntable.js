app.directive("turntable", [ 'loadedImages', 'ngAudio', '$interval', function(loadedImages, ngAudio, $interval){
    function link(scope, element, attrs) {
        var stage = new Konva.Stage({
            container: element[0],   // id of container <div>
            width: 526,
            height: 520
        });

        var mp3Url = 'audio/BackinBlack.mp3';

        var sound = ngAudio.load(mp3Url);



        loadedImages.loadImages().then(function (images) {

            addTurntable(stage, images);

        });

        function addTurntable(stage, images) {

            var turntableLayer = new Konva.Layer();

            var backgroundGroup = new Konva.Group({
                x: 19,
                y: 0
            });
            backgroundGroup.add(addBackgroundLayer(backgroundGroup, images.background));



        var turntableGroup = new Konva.Group({
            x: 22,
            y: 17
        });

        var disc = addDiscLayer(turntableGroup, turntableLayer, images.disk, spSlider);

        var speedButtons = add3345Layer(turntableGroup, turntableLayer, {
              on33: images.speed33On,
              off33: images.speed33Off,
              on45: images.speed45On,
              off45: images.speed45Off,
              changeSpeed: updateSpeed
          }, disc);


            var play = addOnOffLayer(turntableGroup, turntableLayer, {
                on: images.playOn,
                off: images.playOff,
                start: start,
                stop: stop,
                powerOn: powerOn,
                powerOff: powerOff,
                blue_Button_On: images.blueButtonOn,
                blue_Button_Off: images.blueButtonOff,
                red_Button_On: images.redButtonOn,
                red_Button_Off: images.redButtonOff,



            });

             var spSlider = addSpeedSlider(stage, turntableGroup, turntableLayer, {

                speedButton: images.speedSliderButton,
                speedBase: images.speedSlider,
                updateSpeed: updateSpeedSlider

            }, disc);

            var control = addControlLayer(stage, turntableGroup, turntableLayer, {

                control_high_part: images.control_high_part,
                control_mid_part: images.control_mid_part,
                control_smallest_part: images.control_smallest_part,
                control_low_part_left: images.control_low_part_left,
                controlSmallPart: images.controlSmallPart,

                start: function () {
                    disc.start();
                },
                stop: function () {
                    disc.stop();
                },
                needleOnPosition: needleOnPosition,
                needleOutOfPosition: needleOutOfPosition

            });


            var powered = true;
            var started = false;

            function powerOn() {
                //power(true);
            }


            function powerOff() {
                //power(false);
            }

            function power(param) {
                /*powered = param;

                if(powered && started)
                {
                    start();
                }
                else
                {
                    stop();
                }*/
            }

            var timer;

            var timerFunc = function () {
                if(sound.progress)
                {
                    control.setPosition(sound.progress * 100);
                }

            };

            function startPlay() {
                sound = ngAudio.load(mp3Url);

                sound.unlock = true;

                sound.play();

                if(sound.error)
                {
                    alert('error');
                }

                disc.start();
                control.moveToStart();
                timer = $interval(timerFunc, 1000);
            }
            
            
            function start() {
                started = true;

                if(powered) {

                    sound.play();
                    disc.start();
                    timer = $interval(timerFunc, 1000);

                }
            }

            function stop() {

                started = false;

                disc.stop();
                sound.pause();

                timer = undefined;
            }

            var pausedNeedle = false;

            function needleOnPosition(needlePos) {


                //sound.progress = needlePos;

                /*if(pausedNeedle && started)
                {
                    sound.play();
                }*/


            }
            
            function needleOutOfPosition() {
                sound.pause();
                pausedNeedle = false;
            }
            
            
            var percentageC = 0;
            var fixedSpeedC = 45;

            function updateSpeed(fixedSpeed) {
                disc.changeSpeed(fixedSpeed + fixedSpeed * percentageC);

                fixedSpeedC = fixedSpeed;

                var soundSpeed = fixedSpeed / 45;

                sound.playbackRate = soundSpeed + soundSpeed * percentageC;

            }

            function updateSpeedSlider(percentage) {
                disc.changeSpeed(fixedSpeedC + fixedSpeedC * percentage);

                percentageC = percentage;

                var soundSpeed = fixedSpeedC / 45;

                sound.playbackRate = soundSpeed + soundSpeed * percentageC;

            }

            backgroundGroup.add(turntableGroup);
            turntableLayer.add(backgroundGroup);
            stage.add(turntableLayer);

            powerOn();
            startPlay();
        }



        function addWaveControl(stage, images) {
            var waveControlLayer = new Konva.Layer();

            var group = new Konva.Group({
                x: 0,
                y: 385
            });

            var slider = addSoundWaveSlider (group, waveControlLayer, {

                sound_wave: images.sound_Wave,
                sound_wave_control: images.sound_Wave_Control,
                sound_wave_cont_btn: images.sound_Wave_Cont_Btn


            });

            waveControlLayer.add(group);
            stage.add(waveControlLayer);

            return slider;

      }

    }



    return {
        restrict: 'E',
        replace: true,
        scope: true,
        link: link,
        template: '<div></div>'
    };
}]);
