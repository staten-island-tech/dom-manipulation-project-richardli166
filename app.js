const DOMSelectors = {
    form: document.querySelector("#form"),
    openerName: document.querySelector(".opener-name"),
    discoveredBy: document.querySelector(".discoverer"),
    bag: document.querySelector(".bag"),
    Card: document.querySelector("#card"),
}

function input(){
    DOMSelectors.Card.insertAdjacentHTML("afterend",
    `<div class="inserts">
        <img src=${DOMSelectors.firstbag.value} alt="Image" class="opener-image">
        <h1 class="namecard">${DOMSelectors.openerName.value}</h1>
        <h2>${DOMSelectors.discoveredBy.value}</h2>
        <button>Clear</button>
    </div>`
);
}

function clearfield(){
    DOMSelectors.openerName.value = "";
    DOMSelectors.discoveredBy.value = "";
    DOMSelectors.bag.value = "";
}

// function clearcard(){

// }




DOMSelectors.form.addEventListener("submit", function (event){
    event.preventDefault();
    input();
    clearfield();
    // clearcard();
    });
