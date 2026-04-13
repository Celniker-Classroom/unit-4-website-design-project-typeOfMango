// add javascript here
function myFunction(){
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