const first = document.getElementById("first");
const second = document.getElementById("second");
const up = document.getElementById("up");
const down = document.getElementById("down");
const input = document.getElementById("input");


down.onclick = function(){
    second.style.display = "block";
    first.style.display = "none";
    input.value="2";
}
up.onclick = function(){
    second.style.display = "none";
    first.style.display = "block";
    input.value="1";
}

