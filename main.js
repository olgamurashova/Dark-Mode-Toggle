const input = document.querySelector(".input");

const body = document.querySelector("body");
input.checked = false;

updateMode();

function updateMode(){
    if(input.checked){
        body.style.background = "black";

    } else{
        body.style.background = "white";

    }

}

input.addEventListener("input",()=>{
    updateMode();
})