/**
 * Created by max on 18.09.14.
 */

$(function () {

    var video = $('video').get(0);

    $('#slower-button').on('click', function () {
        video.playbackRate -= 0.1;
    });

    $('#faster-button').on('click', function () {
        video.playbackRate += 0.1;
    });

    $('#stop-button').on('click', function () {
        video.pause();
        video.currentTime = 0;
    });
});

function timeUpdate() {
    var video = $('video').get(0);
    console.log(video.currentTime);
    $('p').text(video.currentTime);
}

function showAlert() {
    alert("Video abgespielt");
}