const onOpen = (e, torrentId) => {
  e.preventDefault()

  const { win } = process

  if (process.platform !== 'darwin') {
    torrentId = process.argv[1]
  }

  if (win) {
    win.loadURL(`${process.appUrl}/torrenting?torrent=${torrentId}`)
  } else {
    process.startUp = {
      torrent: torrentId
    }
  }
}

module.exports = {
  onOpen
}