const DOMSelectors = {
    form: document.querySelector("#form"),
    firstName: document.querySelector(".first-name"),
    h2s: document.querySelectorAll("h2"),
    button: document.getElementById("button"),
};
function makeAlbum(){
}
function addCard(Album){
}
DOMSelectors.form.addEventListener("submit", function(event){
    event.preventDefault();
    document.querySelector(".gallery").insertAdjacentHTML()
        //const Album = makeAlbum()
        //addCard()
        //clearFields()
        //addRemoveButtons
    });