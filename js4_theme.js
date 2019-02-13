let select = document.querySelector("select");
let html = document.querySelector("html");
document.body.style.padding = "10px";

function update(bgColor, textColor) {
    html.style.backgroundColor = bgColor;
    html.style.color = textColor;
}

select.onchange = function() {
    let choice = select.value;
    (choice === 'black') ? update("black", "white") : update("white", "black");
}