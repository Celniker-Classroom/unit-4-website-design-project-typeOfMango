// add javascript here
function showMore(){
    let dots = document.getElementById("dots");
    let moreText  = document.getElementById("more");
    let btnText = document.getElementById("myBtn");
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
