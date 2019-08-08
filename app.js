// playBtn
const playPauseBtn = document.querySelector('#startAudioContext');
playPauseBtn.addEventListener('click', () => {
       // play or pause track depending on state
    if (playPauseBtn.dataset.playing === 'false') {
        ediPlayer.start({url:'https://bredi.irt.de:443/services/13'})
        playPauseBtn.dataset.playing = 'true';
        playPauseBtn.firstChild.innerHTML = 'access_time';
        
    } else if (playPauseBtn.dataset.playing === 'true') {
        ediPlayer.stop();
        playPauseBtn.dataset.playing = 'false';
        playPauseBtn.firstChild.innerHTML = 'access_time';
    }
} , false);

ediPlayer.addEventListener('stateChange', (state) => {
    switch (state) {
        case 'running':
             playPauseBtn.firstChild.innerHTML = 'stop';
            break;
    
        case 'stopped':
             playPauseBtn.firstChild.innerHTML = 'play_arrow';
            break;
    }
});

const prettyPrintJson = (json) => {
    M.toast({html: '<pre>' + JSON.stringify(json, null, 10) + '</pre>'});
}

ediPlayer.addEventListener('sls', (obj) => {
    M.toast({html: '<img src="' + obj.url + '">'});
    prettyPrintJson(obj);
});

ediPlayer.addEventListener('msg', (obj) => {
    prettyPrintJson(obj);
});

ediPlayer.addEventListener('dls', (obj) => {
    prettyPrintJson(obj);
});
