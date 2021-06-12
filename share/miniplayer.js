
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

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {

    setTimeout(function() {
        // document.getElementById('audiojs_wrapper0').style.display = 'inline-block';
        // document.querySelector('.audiojs .play-pause').style.display = 'inline-block';
        // document.querySelector('.btn.play').style.display = 'none';
        document.getElementsByClassName('volume')[0].style.display = 'none';
        document.querySelector('.btn.share').style.marginLeft = '0';
        audio = document.getElementById('jp_audio0');
    }, 20);

    // setInterval(function() {

    //     const audiojsb = document.querySelector('.audiojs .play-pause .play');
    
    //     audiojsb.onmouseover = function() {
    //         document.getElementsByClassName('music')[0].style.background = "#E63757"; document.getElementsByClassName('music')[0].style.boxShadow = "0px 5pt 15pt rgb(193, 19, 60, 0.20)";
    //     }
    //     audiojsb.onmouseout = function() {
    //         document.getElementsByClassName('music')[0].style.background = "#171D60"; document.getElementsByClassName('music')[0].style.boxShadow = "0px 5px 15px rgb(9, 13, 44, 0.20)";
    //     }
    
    // });
    
    // setInterval(function() {
    
    //     const audiojsb = document.querySelector('.audiojs .play-pause .play');
    //     const audiojs = document.getElementById('audiojs_wrapper0');
    
    //     if (audiojs.classList.contains('playing')) {
    //         audiojsb.innerHTML = 'пауза';
    //     } else {
    //         audiojsb.innerHTML = 'слушать';
    //     }
    
    // }, 10);
    
    // setInterval(function() {
    
    //     const progress_audiojs = document.querySelector('.audiojs .scrubber .progress');
    //     let progress_audiojs_x = progress_audiojs.style.width;
    //     audio.currentTime = progress_audiojs_x.split('px')[0];
    
    // }, 10);

}

// //