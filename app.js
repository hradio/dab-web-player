ediPlayer.startStream({url:'https://bredi.irt.de:443/services/13'})

// playBtn for mobile devices
document.querySelector('#startAudioContext').addEventListener('click', ediPlayer.audioCtx.resume, false);
ediPlayer.startStream({url:'https://edistream.irt.de/services/4'})

// images from audio stream
ediPlayer.addEventListener('sls', (obj) => {
    M.toast({html: '<img src="' + obj.url + '">'});
});

// some system messages from player
ediPlayer.addEventListener('msg', (obj) => {
    M.toast({html: 'msg: ' + obj.msg});
});

// meta data from and about audio stream
ediPlayer.addEventListener('dls', (obj) => {
    M.toast({html: '<pre>' + JSON.stringify(obj, null, 10) + '</pre>'});
});