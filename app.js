const DOMSelectors = {
    form: document.querySelector("#form"),
    openerName: document.querySelector(".opener-name"),
    discoveredBy: document.querySelector(".discoverer"),
    bag: document.querySelector(".bag"),
    Card: document.querySelector("#carddisplay"),
}

function input(){
    DOMSelectors.Card.insertAdjacentHTML("beforeend",
    `<div class="inserts">
        <img src=${DOMSelectors.bag.value} alt="Image" class="opener-image">
        <h1 class="namecard">${DOMSelectors.openerName.value}</h1>
        <h2>${DOMSelectors.discoveredBy.value}</h2>
        <button class="kenismean">CLEAR</button>
    </div>`
);
}

function clearfield(){
    DOMSelectors.openerName.value = "";
    DOMSelectors.discoveredBy.value = "";
    DOMSelectors.bag.value = "";
}

function clearcard(){
    const clear = document.querySelectorAll(".kenismean");
    clear.forEach(card => {card.addEventListener("click", function (nowant){
    nowant.target.parentElement.remove();
    }
    )});
    clear.remove();
}

DOMSelectors.form.addEventListener("submit", function (event){
    event.preventDefault();
    input();
    clearfield();
    clearcard();
    });
 