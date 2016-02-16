'use strict';

juke.directive('albumList',function(AlbumFactory) {
	console.log("allAlbums inside directive: ");
	return {
		restrict: 'E',
		templateUrl: '/js/album/templates/albums2.html',
		scope: {
			albums: '='	
		}
	};

});