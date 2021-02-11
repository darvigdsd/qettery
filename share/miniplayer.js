
// Qettery Player


// основные значения

const play = document.getElementsByClassName('play')[0];
var audio = document.getElementById('audio');

// //

//btn play

var playclk = 0;
play.onclick = function () {

if (audio.paused) {
        audio.play();
} else {
        audio.pause();
}
    
}

setInterval(function() {
    if (!audio.paused) {
        play.textContent = 'пауза';
    } else {
        play.textContent = 'слушать';
    }
}, 100);


// //

// progress audio

const time = document.getElementsByClassName('time')[0];
const progress = document.getElementsByClassName('progress')[0];

let audioPlay = setInterval(function() {
    
    // Получаем значение на какой секунде песня
    let audioTime = Math.round(audio.currentTime);
    // Получаем всё время песни
    let audioLength = Math.round(audio.duration)
    // Назначаем ширину элементу time
    time.style.width = (audioTime * 100) / audioLength + '%';

}, 10);

// //

// название музыки

const mname = document.getElementsByClassName('musicname')[0];
const musname = document.getElementById('musicname');
const author = document.getElementById('author');

var scrolls = -40;

setInterval(function() {

    scrolls++;
    mname.scrollTo(scrolls, 0);

    if (scrolls >= mname.scrollWidth) {
        scrolls = -40;
    }

}, 40);

// //


// громкость

let volumep = document.getElementById('volume');
const volume = document.getElementsByClassName('volume')[0];
const progressv = document.getElementById('progressv');

audio.volume = 0.1;

setInterval(function() {

    if (audio.muted !== false) {
        volumep.innerHTML = '0';
    } else {
        volumep.innerHTML = audio.volume * 100;
        volumep.innerHTML = volumep.innerHTML.split("\.", 2)[0];
    }

}, 100);

volume.onclick = function() {

    if (audio.muted !== false) {
        audio.muted = false;
    } else {
        audio.muted = true;
    }
    
}

document.addEventListener("keydown", function(event) {
    if (event.keyCode === 38) {
        if (audio.volume !== 1) {
            audio.volume = audio.volume + 0.02;
        }
        else if (audio.volume > 1) {
            audio.volume = 1;
        }
    }
});

document.addEventListener("keydown", function(event) {
    if (event.keyCode === 40) {
        if (audio.volume !== 0.01) {
            audio.volume = audio.volume - 0.02;
        } 
        else if (audio.volume == 0.01) {

        } 
    }
});

// //

var NAVIGATION = [38, 40];

document.body.addEventListener("keydown", function(event) {
	if (-1 != NAVIGATION.indexOf(event.keyCode))
		event.preventDefault();
});

// audiojs

window.isMobileOrTablet = function() {
	var check = false;
	(function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
	return check;
}

if (isMobileOrTablet()) {

    document.querySelector('.audiojs').style.display = 'inline-block';
    document.querySelector('.audiojs .play-pause').style.display = 'inline-block';
    document.querySelector('.btn.play').style.display = 'none';
    document.getElementsByClassName('volume')[0].style.display = 'none';

    setInterval(function() {

        const audiojsb = document.querySelector('.audiojs .play-pause .play');
    
        audiojsb.onmouseover = function() {
            document.getElementsByClassName('music')[0].style.background = "#E63757"; document.getElementsByClassName('music')[0].style.boxShadow = "0px 5pt 15pt rgb(193, 19, 60, 0.20)";
        }
        audiojsb.onmouseout = function() {
            document.getElementsByClassName('music')[0].style.background = "#171D60"; document.getElementsByClassName('music')[0].style.boxShadow = "0px 5px 15px rgb(9, 13, 44, 0.20)";
        }
    
    });
    
    setInterval(function() {
    
        const audiojsb = document.querySelector('.audiojs .play-pause .play');
        const audiojs = document.getElementById('audiojs_wrapper0');
    
        if (audiojs.classList.contains('playing')) {
            audiojsb.innerHTML = 'пауза';
        } else {
            audiojsb.innerHTML = 'слушать';
        }
    
    }, 10);
    
    setInterval(function() {
    
        const progress_audiojs = document.querySelector('.audiojs .scrubber .progress');
        let progress_audiojs_x = progress_audiojs.style.width;
        audio.currentTime = progress_audiojs_x.split('px')[0];
    
    }, 10);

} else {
    
}

// //