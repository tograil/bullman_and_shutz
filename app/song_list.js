app.controller('tt',['$scope', function ($scope) {

       $scope.songs = [];
       sound_cloud.initalize({

        client_id: 'YOUR ID'

       });

      sound_Cloud.get('tracks', function(tracks){

            var i,
            for (i = 0, i < tracks.length, i++){

              sound_cloud.stream('/tracks/' + tracks[i].id, function (sm_object){

               var track = {

                 id: track[i].id,
                 title: track[i].id,
                 url:  sm_object.url,


               };

              $scope.$apply(function(){

                   $scope.songs.push(track);

                   });

                 });
              };
          });
      };

]);


app.service ('', function (){



})

/*
.controller('MainCtrl', ['$scope', function ($scope) {
        $scope.songs = [
            {
                id: 'one',
                title: 'Rain',
                artist: 'Drake',

            },
            {
                id: 'two',
                title: 'Walking',
                artist: 'Nicki Minaj',
                url: 'http://www.schillmania.com/projects/soundmanager2/demo/_mp3/walking.mp3'
            },
            {
                id: 'three',
                title: 'Barrlping with Carl (featureblend.com)',
                artist: 'Akon',
                url: 'http://www.freshly-ground.com/misc/music/carl-3-barlp.mp3'
            },
            {
                id: 'four',
                title: 'Angry cow sound?',
                artist: 'A Cow',
                url: 'http://www.freshly-ground.com/data/audio/binaural/Mak.mp3'
            },
            {
                id: 'five',
                title: 'Things that open, close and roll',
                artist: 'Someone',
                url: 'http://www.freshly-ground.com/data/audio/binaural/Things%20that%20open,%20close%20and%20roll.mp3'
            }
        ];
    }]);

    /*
