//PHONE

const phoneInput = document.querySelector("#phone_input")
const phoneButton = document.querySelector("#phone_button")
const phoneResult = document.querySelector("#phone_result")



const regExp = /^\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}$/
phoneButton.onclick = () => {
    if (regExp.test(phoneInput.value)) {
        phoneResult.innerHTML = 'ok'
        phoneResult.style.color = "green"
    }else{
        phoneResult.innerHTML = 'not ok'
        phoneResult.style.color = "red"
    }
}


const tabContentBlocks = document.querySelectorAll(".tab_content_block")
const tabs = document.querySelectorAll(".tab_content_item")
const tabsParent = document.querySelector(".tab_content_items")

const hideTabCont = () => {
    tabContentBlocks.forEach((block) => {
        block.style.display = 'none'
    })
    tabs.forEach((tab) => {
        tab.classList.remove('tab_content_item_active')
    })
}


const  showTabContent = (id = 0) => {
    tabContentBlocks[id].style.display = 'block'
    tabs[id].classList.add('tab_content_item_active')
}

tabsParent.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item')){
        tabs.forEach((tab, tabIndex) => {
            if (event.target === tab){
                hideTabCont()
                showTabContent(tabIndex)
            }
        })
    }
}
hideTabCont()
showTabContent()

let somInput = document.querySelector("#som")
let usdInput = document.querySelector("#usd")
let eurInput = document.querySelector("#eur");

let converter = (element, targetElements) => {
    element.oninput = () => {
        const request = new XMLHttpRequest();
        request.open('GET', '../data/converter.json');
        request.setRequestHeader('Content-Type', 'application/json');
        request.send();
        request.onload = () => {
            const data = JSON.parse(request.response);
            targetElements.forEach(target => {
                if (element.id === 'som') {
                    if (target.id === 'usd') target.value = (element.value / data.usd).toFixed(2);
                    if (target.id === 'eur') target.value = (element.value / data.eur).toFixed(2);
                }
                if (element.id === 'usd') {
                    if (target.id === 'som') target.value = (element.value * data.usd).toFixed(2);
                    if (target.id === 'eur') target.value = (element.value * data.usd / data.eur).toFixed(2);
                }
                if (element.id === 'eur') {
                    if (target.id === 'som') target.value = (element.value * data.eur).toFixed(2);
                    if (target.id === 'usd') target.value = (element.value * data.eur / data.usd).toFixed(2);
                }
                if (element.value === '') {
                    target.value = '';
                }
            });
        };
    };
};
converter(somInput, [usdInput, eurInput]);
converter(usdInput, [somInput, eurInput]);
converter(eurInput, [somInput, usdInput]);