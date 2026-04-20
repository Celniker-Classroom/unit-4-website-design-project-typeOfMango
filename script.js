// add javascript here
function showMore(){
    let dots = document.getElementsByClassName("dots");
    let moreText  = document.getElementsByClassName("more");
    let btnText = document.getElementsByClassName("myBtn");
    if(dots.style.display === "none"){
        dots.style.display = "inline";
        btnText.innerHTML = "Show more";
        moreText.style.display = "none";
    }
    else{
        dots.style.display = "none";
        btnText.innerHTML = "Show less";
        moreText.style.display = "inline";
    }
}
let id = null;
function Animate() {
    let elem = document.getElementById("animation");
    let pos = 0;
    clearInterval(id);
    id = setInterval(frame, 10);
    function frame() {
        if(pos > 349){
            clearInterval(id);
        }
        else{
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
}
