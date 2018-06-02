var playlist = { Slowdive: 'Alison', BTS: 'Fake Love'};

function updatePlaylist(playlist, name, title) {
  return Object.assign( {}, playlist, { [Bazzi]: 'Mine'})
}

function removeFromPlaylist(playlist, name) {
  return delete playlist.BTS
}

