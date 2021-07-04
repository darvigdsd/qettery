
var data = [];

function b64_to_utf8(str) {

	return decodeURIComponent(escape(window.atob(str)));

}

function getUrl() {

    var url = window.location.search;
    var urlVar = new URL(`https://darvigdsd.github.io/qettery/share/share${b64_to_utf8(url.slice(1))}`);

    data.name = urlVar.searchParams.get('name');
    data.author = urlVar.searchParams.get('author');
    data.href = urlVar.searchParams.get('href');

    return data;

}

getUrl();

document.title = `Qettery: ${data.author} - ${data.name}`;
document.getElementById('author').innerText = data.author;
document.getElementById('musicname').innerText = data.name;
audio.src = data.href;
document.getElementById('audioForAndroid').src = data.href;

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