'use strict';

// Create-playlist view

juke.controller('PlaylistFormCtrl', function ($scope, $state, PlaylistFactory) {

  $scope.createPlaylist = function () {
    $scope.hasSubmitted = true;
    PlaylistFactory
    .create($scope.newPlaylist)
    .then(function (playlist) {
      $state.go('playlist', {playlistId: playlist._id});
    })
    .catch(function (err) {
      $scope.hasSubmitted = false;
      $scope.serverError = err.message || 'Something went wrong!';
    });
  };

});

// All-playlists sidebar

juke.controller('PlaylistsCtrl', function ($scope, PlaylistFactory) {

  PlaylistFactory.fetchAll()
  .then(function (playlists) {
    $scope.playlists = playlists;
  });

});

// Single-playlist view

juke.controller('PlaylistCtrl', function ($scope, thePlaylist, PlaylistFactory, PlayerFactory) {

  $scope.playlist = thePlaylist;

  $scope.addSong = function (song) {
    return PlaylistFactory.addSong($scope.playlist._id, song)
    .then(function (addedSong) {
      $scope.playlist.songs.push(addedSong);
      return addedSong;
    });
  };

  // $scope.removeSong = PlaylistFactory.removeSong;
  $scope.removeSong = function (song) {
    return PlaylistFactory.removeSong($scope.playlist._id, song)
    .then(function (removedSong) {
      $scope.playlist.songs.splice($scope.playlist.songs.indexOf(removedSong),1);
      return removedSong;
    });
  };

  // $scope.toggle = function (song) {
  //   if (song !== PlayerFactory.getCurrentSong()) {
  //     PlayerFactory.start(song, $scope.playlist.songs);
  //   } else if ( PlayerFactory.isPlaying() ) {
  //     PlayerFactory.pause();
  //   } else {
  //     PlayerFactory.resume();
  //   }
  // };

  // $scope.getCurrentSong = function () {
  //   return PlayerFactory.getCurrentSong();
  // };

  // $scope.isPlaying = function (song) {
  //   return PlayerFactory.isPlaying() && PlayerFactory.getCurrentSong() === song;
  // };

});
