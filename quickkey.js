jwplayer().onPlay(function () {
    document.body.focus();
});
jwplayer().onPause(function () {
    document.body.focus();
});
jwplayer().onReady(function () {
    var width = jwplayer().getWidth();
    var height = jwplayer().getHeight();
    document.onkeydown = checkKey;

    function checkKey(e) {
        e = e || window.event;
        if (e.keyCode == '38') {
            var volume = jwplayer().getVolume();
            if (volume < 105) {
                volume += 5;
                jwplayer().setVolume(volume);
                return !(e.keyCode == 38);
            }
        }
        if (e.keyCode == '40') {
            var volume2 = jwplayer().getVolume();
            if (volume2 > 0) {
                volume2 -= 5;
                jwplayer().setVolume(volume2);
                return !(e.keyCode == 40);
            }
        }
        if (e.keyCode == '39') {
            var position = jwplayer().getPosition();
            if (jwplayer().getState() == "BUFFERING" || jwplayer().getState() == "PLAYING") {
                position += 5;
                jwplayer().seek(position);
                return !(e.keyCode == 39);
            }
        }
        if (e.keyCode == '37') {
            var position2 = jwplayer().getPosition();
            if (jwplayer().getState() == "BUFFERING" || jwplayer().getState() == "PLAYING") {
                position2 -= 5;
                jwplayer().seek(position2);
                return !(e.keyCode == 37);
            }
        }
        if (e.keyCode == '32') {
            if (jwplayer().getState() == "PLAYING" || jwplayer().getState() == "PAUSED") {
                jwplayer().play();
                return !(e.keyCode == 32);
            }
        }
        if (e.keyCode == '27') {
            jwplayer().stop();
            document.title = title;
            return !(e.keyCode == 27);
        }
        if (e.keyCode == '16') {
            if (jwplayer().getWidth() == width) {
                jwplayer().resize(width * 1.5, height * 1.5);
                return !(e.keyCode == 16);
            } else {
                jwplayer().resize(width, height);
                return !(e.keyCode == 16);
            }
        }
        if (e.keyCode == '13') {
            if (jwplayer().getFullscreen() == false) {
                jwplayer().setFullscreen(true);
                return !(e.keyCode == 13);
            } else {
                jwplayer().setFullscreen(false);
                return !(e.keyCode == 13);
            }
        }
        if (e.keyCode == '17') {
            if (jwplayer().getMute() == false) {
                jwplayer().setMute(true);
                return !(e.keyCode == 17);
            } else {
                jwplayer().setMute(false);
                return !(e.keyCode == 17);
            }
        }
        if (e.keyCode == '190') {
            if (jwplayer().getPlaylist().length != 1) {
                if (jwplayer().getPlaylistIndex() != jwplayer().getPlaylist().length - 1) {
                    var nextItem = jwplayer().getPlaylistIndex() + 1;
                    if (jwplayer().getState() == "BUFFERING" || jwplayer().getState() == "PLAYING") {
                        jwplayer().load(nextItem);
                        jwplayer().play();
                        return !(e.keyCode == 190);
                    } else {
                        jwplayer().load(nextItem);
                        return !(e.keyCode == 190);
                    }
                }
            }
        }
        if (e.keyCode == '188') {
            if (jwplayer().getPlaylist().length != 1) {
                if (jwplayer().getPlaylistIndex() != 0) {
                    var prevItem = jwplayer().getPlaylistIndex() - 1;
                    if (jwplayer().getState() == "BUFFERING" || jwplayer().getState() == "PLAYING") {
                        jwplayer().load(prevItem);
                        jwplayer().play();
                        return !(e.keyCode == 188);
                    } else {
                        jwplayer().load(prevItem);
                        return !(e.keyCode == 188);
                    }
                }
            }
        }
    }
});