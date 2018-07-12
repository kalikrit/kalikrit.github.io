/* get elements */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

/* functions */
function togglePlay(){
    if(video.paused) video.play();
    else video.pause();
}

function updatePlayButton(){
    toggle.textContent = this.paused ? '▶' : '❚ ❚';
}

function skip_video(){
    video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate(){
    video[this.name] = this.value;
}

function handleProgress(){
    const percent = (video.currentTime/video.duration)*100;
    progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e){
    video.currentTime = (e.offsetX / progress.offsetWidth)*video.duration;
}

/* hook up element listeners */
video.addEventListener('click',togglePlay);
video.addEventListener('play',updatePlayButton);
video.addEventListener('pause',updatePlayButton);
video.addEventListener('timeupdate',handleProgress);
toggle.addEventListener('click',togglePlay);
skipButtons.forEach(button=>button.addEventListener('click',skip_video));

ranges.forEach(range=>range.addEventListener('change',handleRangeUpdate));
ranges.forEach(range=>range.addEventListener('mousemove',handleRangeUpdate));

progress.addEventListener('click',scrub);

let mousedown = false;
progress.addEventListener('mousedown', ()=>mousedown=true);
progress.addEventListener('mouseup', ()=>mousedown=false);
progress.addEventListener('mousemove',(e)=>mousedown && scrub(e));