'use strict';

juke.directive('albumList',function(AlbumFactory) {
	return {
		restrict: 'E',
		templateUrl: '/js/album/templates/albums2.html',
		scope: {
			albums: '='	
		}
	};

});