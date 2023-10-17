const DOMSelectors = {
    form: document.querySelector("#form"),
    firstName: document.querySelector(".first-name"),
    h2s: document.querySelectorAll("h2"),
    button: document.getElementById("button"),
};
DOMSelectors.form.addEventListener("submit", function(event){
    event.preventDefault();
    console.log(DOMSelectors.firstName.value);
    DOMSelectors.h2s.forEach(
        (element)=> element.textContent = DOMSelectors.firstName.value);
});
function clear(){

}
DOMSelectors.button.removeEventListener("click", function()){
    event.preventDefault

}