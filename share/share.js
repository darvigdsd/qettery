
var data = []; // массив для хранения переменных

function b64_to_utf8(str) {

	return decodeURIComponent(escape(window.atob(str)));

}

function getUrl() {
    var urlVar = window.location.search; // получаем параметры из урла

    // var urlVar2 = aes.decryptText(pidCryptUtil.stripLineFeeds(crypted),urlVar.slice(1),{nBits:256}); // pidCryptUtil.decodeBase64(`${urlVar.slice(1)}`)

    // var urlVar2 = Base64.decode(urlVar.slice(1));

    var urlVar2 = b64_to_utf8(urlVar.slice(1));

    var arrayVar = []; // массив для хранения переменных
    var valueAndKey = []; // массив для временного хранения значения и имени переменной
    arrayVar = (urlVar2.substr(1)).split('&'); // разбираем урл на параметры
    if(arrayVar[0]=="") return false; // если нет переменных в урле
    for (i = 0; i < arrayVar.length; i ++) { // перебираем все переменные из урла
        valueAndKey = arrayVar[i].split('='); // пишем в массив имя переменной и ее значение
        data[valueAndKey[0]] = valueAndKey[1]; // пишем в итоговый массив имя переменной и ее значение
    }
    return data; // возвращаем результат
}

getUrl();

document.getElementById('author').innerText = data.author;
document.getElementById('musicname').innerText = data.name;
audio.src = data.href;

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