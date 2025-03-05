const audio = document.getElementById('audio');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const progress = document.getElementById('progress');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const cover = document.getElementById('cover');


const songs = [
    {
        name: 'dandelions',
        title: 'Dandelions',
        artist: 'Ruth B.',
        cover: 'https://i.scdn.co/image/ab67616d0000b273940709536c688461a6cb1379',
        src: 'dandelions.mp3'
    },
    
    {
        name: 'dieWithASmile',
        title: 'Die with a Smile',
        artist: 'Lady Gaga and Bruos Mars',
        cover: 'https://i1.sndcdn.com/artworks-Qbp9zR37gUOvDf5b-tGhxiA-t500x500.jpg',
        src: 'die With a smile.mp3' 
    },
    {
        name: 'untill ',
        title: 'Wanna Be Yours',
        artist: 'Artic Monkeys',
        cover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlOgMTIWPvtKoZc_v2GNZj8rBXf9TBVIzP7A&s',
        src: 'wannabe.mp3' 
    },
    {
        name: 'Sivantha Kangal',
        title: 'Perfect',
        artist: 'Ed Sheeran',
        cover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmcv_iZk4rijPBt60bw1yPQXM_f7K7eib1lQ&s',
        src: 'perfect.mp3' 
    },
    {
        name: 'untill ',
        title: 'Untill I Found You',
        artist: 'Stephen Sanchez',
        cover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREH50umgtVvg3Eq-4mj-C4Eua5P0nkynT3yQNkI8t9xLchYR-XSTOtp9GsyXa4B8oa3Dw&usqp=CAU',
        src: 'untillifoundu.mp3' 
    },
    {
        name: 'Heat waves',
        title: 'Heat waves',
        artist: 'Glass Animales',
        cover: 'https://i1.sndcdn.com/artworks-y1ORaEivu4nfoKeb-nU8msA-t500x500.jpg',
        src: 'heatwaves.mp3' 
    },
    {
        name: 'New York Nagaram',
        title: 'New York Nagaram',
        artist: 'A.R.Rahman',
        cover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkaVRpJE4pMSBxU9gWw9Bh7Dl5xJanNoNMropcEftuFOg5dJRuFQ1fztROq6qM-Vm0jUU&usqp=CAU',
        src: 'newyork.mp3' 
    }
];

let songIndex = 0;


function loadSong(song) {
    title.innerText = song.title;
    artist.innerText = song.artist;
    audio.src = song.src;
    cover.src = song.cover;
}


function togglePlay() {
    if (audio.paused) {
        audio.play();
        playBtn.innerHTML = '⏸️'; 
    } else {
        audio.pause();
        playBtn.innerHTML = '▶️';
    }
}

function updateProgress(e) {
    const { duration, currentTime } = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progress.value = progressPercent;
}


function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
    audio.currentTime = (clickX / width) * duration;
}


function prevSong() {
    songIndex--;
    if (songIndex < 0) {
        songIndex = songs.length - 1; 
    }
    loadSong(songs[songIndex]);
    audio.play();
}

function nextSong() {
    songIndex++;
    if (songIndex > songs.length - 1) {
        songIndex = 0;
    }
    loadSong(songs[songIndex]);
    audio.play();
}


playBtn.addEventListener('click', togglePlay);
audio.addEventListener('timeupdate', updateProgress);
progress.addEventListener('click', setProgress);
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);


loadSong(songs[songIndex]);
