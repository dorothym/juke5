'use strict';

/* ARTISTS (PLURAL) CONTROLLER */

juke.controller('ArtistsCtrl', function ($scope, $log, allArtists) {

  $scope.artists = allArtists;

});

/* ARTIST (SINGULAR) CONTROLLER */

juke.controller('ArtistCtrl', function ($scope, $log, PlayerFactory, theArtist) {

  $scope.artist = theArtist;
  console.log("controller: ", $scope.artist.songs);

  // $scope.getCurrentSong = function () {
  //   return PlayerFactory.getCurrentSong();
  // };

  // $scope.isPlaying = function (song) {
  //   return PlayerFactory.isPlaying() && PlayerFactory.getCurrentSong() === song;
  // };

  // $scope.toggle = function (song) {
  //   if (song !== PlayerFactory.getCurrentSong()) {
  //     PlayerFactory.start(song, $scope.artist.songs);
  //   } else if ( PlayerFactory.isPlaying() ) {
  //     PlayerFactory.pause();
  //   } else {
  //     PlayerFactory.resume();
  //   }
  // };

});
