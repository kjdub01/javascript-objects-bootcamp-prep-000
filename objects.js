var playlist = { 'Slowdive': 'Alison', 'My Bloody Valentine': 'Sometimes'};

function updatePlaylist(playlist, name, title) {
  return Object.assign( {}, playlist, { []: 'Mine'})
}

function removeFromPlaylist(playlist, name) {
  return delete playlist.BTS
}

