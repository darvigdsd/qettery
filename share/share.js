
let id = 0;

function getUrl() {

    var url = new URL(window.location);
    id = url.searchParams.get('id');

}

getUrl();

let gdata = [];
var xhr = new XMLHttpRequest(), data;
xhr.open('get', `https://qettery.herokuapp.com/api/stream.php?id=${id}&quality=high`, false);
xhr.onload = function() {
    if (xhr.readyState == 4 && (~~(xhr.status / 100)) == 2) {
        data = JSON.parse(xhr.responseText);
        gdata = JSON.parse(xhr.responseText).result.stream;
    }
}
xhr.send(null);

console.log(`https://qettery.herokuapp.com/api/streamred.php?id=${id}&code=${new URL(gdata).searchParams.get('code')}&expires=${new URL(gdata).searchParams.get('expires')}&cdn=${new URL(gdata).hostname.split('.')[0]}`);

audio.src = gdata;
document.getElementById('audioForAndroid').src = gdata;

let gdatat = [];

var xhrTrack = new XMLHttpRequest(), datat;
xhrTrack.open('get', `https://qettery.herokuapp.com/api/tracks.php?ids=${id}`, false);
xhrTrack.onload = function() {
    document.getElementsByClassName('loader')[0].classList.add('loaded');
    if (xhrTrack.readyState == 4 && (~~(xhrTrack.status / 100)) == 2) {
        datat = JSON.parse(xhrTrack.responseText);
        console.log(datat.result.tracks[id]);
        gdatat = JSON.parse(xhrTrack.responseText).result.tracks[id];
    }
}
xhrTrack.send(null);

document.getElementById('author').innerHTML = gdatat.credits.replace('`', "'");
document.getElementById('musicname').innerHTML = gdatat.title.replace('`', "'");
let previewTrack = new URL(gdatat.image.src);
previewTrack.searchParams.set('size', '250x250');
document.getElementById('preview').src = previewTrack;

document.title = `Qettery: ${gdatat.credits.replace('`', "'")} - ${gdatat.title.replace('`', "'")}`;

document.getElementById('share').onclick = function copyShareUrl() {

    var url = document.createElement('input'),
    text = window.location.href;
    document.body.appendChild(url);

    url.value = text;
    url.select();
    document.execCommand('copy');
    document.body.removeChild(url);

    this.style.background = 'white';
    this.style.color = "#4E75FF";

    setTimeout(function() {
        document.getElementById('share').style.background = '#4E75FF';  
        document.getElementById('share').style.color = 'white';
    }, 1000);

}

document.getElementById('preview').addEventListener('error', function() {
    document.getElementById('preview').style.display = 'none';
});