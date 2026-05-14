let currentChap = 1;
const maxChap = 4;

async function loadChap(){

const response = await fetch(`chap/chap${currentChap}.html`);

const data = await response.text();

document.getElementById("content").innerHTML = data;

document.getElementById("title").innerHTML =
`Chương ${currentChap}`;

localStorage.setItem("chap",currentChap);

}

function nextChap(){

if(currentChap < maxChap){

currentChap++;
loadChap();

}else{

alert("Đã chap cuối");

}

}

function prevChap(){

if(currentChap > 1){

currentChap--;
loadChap();

}else{

alert("Đây là chap đầu");

}

}

function toggleMusic(){

const music = document.getElementById("music");

if(music.paused){

music.play();

}else{

music.pause();

}

}

const savedChap = localStorage.getItem("chap");

if(savedChap){

currentChap = parseInt(savedChap);

}

loadChap();
