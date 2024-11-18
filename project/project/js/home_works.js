let homeGmail = document.querySelector("#gmail_input")
let homeButton = document.querySelector("#gmail_button")
let homeResult = document.querySelector("#gmail_result")



let regExp = /^[a-zA-Z\d]+@gmail\.com$/
homeButton.onclick = () => {
    if (homeGmail.value.length >= 16 && regExp.test(homeGmail.value)) {
        homeResult.innerHTML = "Lets GO"
        homeResult.style.color = "green"
    }else{
        homeResult.innerHTML = "restart"
        homeResult.style.color = "red"
    }
}

const childBlock = document.querySelector(".child_block");
childBlock.style.position = 'absolute';
childBlock.style.backgroundColor = 'white';
let positionStart = 0;
const moveBlock = () => {
    if (positionStart < 450) {
        positionStart++;
        childBlock.style.left = `${positionStart}px`;
    } else if (positionStart >= 450 && positionStart < 900) {
        positionStart++;
        childBlock.style.top = `${positionStart - 450}px`;
    } else if (positionStart >= 900 && positionStart < 1350) {
        positionStart++;
        childBlock.style.left = `${1350 - positionStart}px`;
    } else if (positionStart >= 1350 && positionStart < 1800) {
        positionStart++;
        childBlock.style.top = `${1800 - positionStart}px`;
    } else {
        positionStart = 0;
    }
    requestAnimationFrame(moveBlock);
};
moveBlock();



let seconds = document.querySelector("#seconds")
let start = document.querySelector("#start")
let stop = document.querySelector("#stop")
let reset = document.querySelector("#reset")


let startNumber = parseInt(seconds.innerHTML);
let intervalId;

start.onclick = () => {
    start.disabled = true;
    intervalId = setInterval(() => {
        startNumber++
        seconds.innerHTML = startNumber
    }, 1000)
}

stop.onclick = () => {
    clearInterval(intervalId);
    start.disabled = false;
}

reset.onclick = () => {
    clearInterval(intervalId)
    startNumber = 0
    seconds.innerHTML = startNumber
    start.disabled = false
}






  




