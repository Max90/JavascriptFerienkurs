/**
 * Created by max on 18.09.14.
 */

$(function () {


    var track = $('audio').get(0);

    $('#play-pause-button').on('click', function () {
        if (track.paused) {
            console.log(track);
            track.play();
        } else {
            track.pause();
        }
    });

    $('#slower-button').on('click', function () {
        track.playbackRate -= 0.1;
    });

    $('#faster-button').on('click', function () {
        track.playbackRate += 0.1;
    });

    $('#stop-button').on('click', function () {
        track.pause();
        track.currentTime = 0;
    });
});