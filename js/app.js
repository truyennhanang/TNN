let chapters = [];
let currentChap = 0;

fetch('data/chapters.json')
.then(res => res.json())
.then(data => {
    chapters = data;
    loadChap(0);
});

function loadChap(index){
    currentChap = index;
    document.getElementById('chap-title').innerText = chapters[index].title;
    document.getElementById('chap-content').innerText = chapters[index].content;
}

function nextChap(){
    if(currentChap < chapters.length - 1){
        currentChap++;
        loadChap(currentChap);
        window.scrollTo(0,0);
    }
}

function prevChap(){
    if(currentChap > 0){
        currentChap--;
        loadChap(currentChap);
        window.scrollTo(0,0);
    }
}

function toggleMusic(){
    const music = document.getElementById('music');
    if(music.paused){
        music.play();
    }else{
        music.pause();
    }
}
