const buton=document.querySelector(".btn");
const video=document.querySelector(".background-video");
const fa=document.querySelector(".fa");

buton.addEventListener("click",()=>{
    control();
})



const control = () => {
if (buton.classList.contains("pause")) {
    buton.classList.remove("pause")
    video.play();
    fa.classList.add("fa-pause");
    fa.classList.remove("fa-play")
    
}else{
    buton.classList.add("pause")
    video.pause();
    fa.classList.remove("fa-pause")
    fa.classList.add("fa-play")
}

}