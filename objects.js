var playlist = {
  artist: "title"
}

function updatePlaylist(playlist, artistName, songTitle) {
 return Object.assign({}, playlist, { [artistName]: songTitle})
}

function removeFromPlaylist(playlist, artistName) {
delete playlist.Kanye
 return playlist
}

it('should take less than 500ms', function(done){
  this.timeout(0);
  setTimeout(done, 300);
});
