const myVideo = document.querySelector(".v-container");
const btn = document.querySelector(".switch");

function playPause(){
    if(myVideo.paused){
        myVideo.play();
        btn.style.left = "0";
        btn.style.transitionDuration = "0.2s";
    }
    else{
        myVideo.pause();
        btn.style.left = "50%";
        btn.style.transitionDuration = "0.2s";
    }
}