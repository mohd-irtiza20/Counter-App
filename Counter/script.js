let decrease = document.querySelector(".decrease");
let reset = document.querySelector(".reset");
let increase = document.querySelector(".increase");
let rescount = document.querySelector(".result");

decrease.addEventListener("click", function () {
    rescount.innerHTML--;
    applyColor();
});
reset.addEventListener("click", function () {
    rescount.innerHTML = 0;
    applyColor();
});

increase.addEventListener("click", function () {
    rescount.innerHTML++;
    applyColor();
});

function applyColor() {
    if (rescount.innerHTML > 0) {
        rescount.style.color = "green";
    }
    else if (rescount.innerHTML < 0) {
        rescount.style.color = "red";
    }
    else {
        rescount.style.color = "grey";
    }
}