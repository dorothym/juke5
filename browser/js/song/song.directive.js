juke.directive('songList',function(PlayerFactory) {
	console.log("my favorite song directive");
	return {
		restrict: 'E',
		templateUrl: '/js/song/templates/songs.html',
		scope: {
			songs: '='	
		},
		link: function(scope) {
			scope.getCurrentSong = function () {
			    return PlayerFactory.getCurrentSong();
			  };

			scope.isPlaying = function (song) {
			    return PlayerFactory.isPlaying() && PlayerFactory.getCurrentSong() === song;
			};

		  	scope.toggle = function (song) {
		    	if (song !== PlayerFactory.getCurrentSong()) {
		    	// variables need to match the directive's scope!! (scope.songs, not scope.artist.songs)
		      	PlayerFactory.start(song, scope.songs);
		    } else if ( PlayerFactory.isPlaying() ) {
		      	PlayerFactory.pause();
		    } else {
		      	PlayerFactory.resume();
		    }
		  };

  			scope.start = PlayerFactory.start;
			
		}
	};

});

juke.directive('doubleClick',function(PlayerFactory) {
	console.log("inside doubleClick directive");
	return {
		restrict: 'A',
        scope: {
            doubleClick: '&'
        },
		link: function(scope, element) {
			element.on('dblclick', function() {
				scope.doubleClick();
			});
		  }	
	};

});