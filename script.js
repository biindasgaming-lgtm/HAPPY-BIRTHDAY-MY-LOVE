/* ===== EDIT THESE ===== */
var HER_NAME = "My Love";          // her name
var MY_NAME  = "Umar";             // your name
var BIRTHDAY = "2026-11-24T00:00:00+05:30";
var PHOTOS   = ["images/photo1.jpg", "images/photo2.jpg", "images/photo3.jpg", "images/photo4.jpg", "images/photo5.jpg", "images/photo6.jpg"];
/* ====================== */

document.getElementById('hName').textContent = HER_NAME;
document.getElementById('gName').textContent = "For " + HER_NAME;
document.getElementById('fromName').textContent = MY_NAME;

// floating hearts
var hs = document.getElementById('hearts'), em = ['💗','💖','💕','🌸','✨'];
for (var i = 0; i < 16; i++) {
  var e = document.createElement('span');
  e.textContent = em[i % em.length];
  e.style.left = (Math.random() * 100) + 'vw';
  e.style.fontSize = (14 + Math.random() * 18) + 'px';
  e.style.animationDuration = (9 + Math.random() * 10) + 's';
  e.style.animationDelay = (-Math.random() * 15) + 's';
  hs.appendChild(e);
}

// gallery
var g = document.getElementById('gallery');
for (var k = 0; k < PHOTOS.length; k++) {
  var f = document.createElement('div'); f.className = 'ph';
  if (PHOTOS[k]) { var im = document.createElement('img'); im.src = PHOTOS[k]; im.alt = 'Our memory ' + (k + 1); f.appendChild(im); }
  else { f.innerHTML = '<i>📷</i>Our photo ' + (k + 1); }
  g.appendChild(f);
}

// countdown + reveal
var target = BIRTHDAY ? new Date(BIRTHDAY).getTime() : 0, box = document.getElementById('count');
function tick() {
  var diff = target - Date.now();
  if (!target || diff <= 0) { box.hidden = true; return; }
  box.hidden = false;
  document.getElementById('d').textContent = Math.floor(diff / 864e5);
  document.getElementById('h').textContent = Math.floor(diff % 864e5 / 36e5);
  document.getElementById('m').textContent = Math.floor(diff % 36e5 / 6e4);
  document.getElementById('s').textContent = Math.floor(diff % 6e4 / 1e3);
}
tick(); setInterval(tick, 1000);
document.getElementById('openBtn').onclick = function () {
  document.getElementById('gate').style.display = 'none';
  document.getElementById('site').classList.add('on');
  window.scrollTo(0, 0);
};
