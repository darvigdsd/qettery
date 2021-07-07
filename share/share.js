
let id = 0;

function getUrl() {

    var url = new URL(window.location);
    id = url.searchParams.get('id');

}

getUrl();

// document.title = `Qettery: ${data.author} - ${data.name}`;
// document.getElementById('author').innerText = data.author;
// document.getElementById('musicname').innerText = data.name;
// audio.src = data.href;
// document.getElementById('audioForAndroid').src = data.href;

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

document.getElementById('share').onclick = function copyShareUrl() {

    var url = document.createElement('input'),
    text = window.location.href;
    document.body.appendChild(url);

    url.value = text;
    url.select();
    document.execCommand('copy');
    document.body.removeChild(url);

    this.style.background = '#E63757';
    this.style.boxShadow = '0px 3px 6px rgba(193, 19, 60, 0.16)';

    setTimeout(function() {
        document.getElementById('share').style.background = '#52F2B1';
        document.getElementById('share').style.boxShadow = '0px 3px 6px rgba(82, 242, 177, 0.16)';  
    }, 1000);

}

document.getElementById('preview').addEventListener('error', function() {
    document.getElementById('preview').style.display = 'none';
});