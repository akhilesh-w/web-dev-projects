const loadText = document.querySelector(".loadText");
const bg = document.querySelector(".bg");

let load = 0

let int = setInterval(blurring, 30)

function blurring() {
    load++

    if(load == 100) {
        break
    }

    console.log(load);
}