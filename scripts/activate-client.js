

var activatebtn = document.getElementById('activateclient');

activatebtn.onclick = function() {
    localStorage.setItem('webclient', 'active');
    document.location.href = 'client/home.html';
}