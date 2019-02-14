let h1 = document.querySelector("h1");
let html = document.querySelector("html");
let theme = document.getElementById("themeSelect");
let font = document.getElementById("fontSelect");
let reset = document.getElementById("reset");

function updateTheme(bgColor, txtColor) {
    html.style.backgroundColor = bgColor;
    html.style.color = txtColor;
}

function updateFont(fontFamily) {
    html.style.fontFamily = fontFamily;
}

reset.onclick = function() {
    // check if the choices are defaults
    if (html.style.backgroundColor === "" && 
        html.style.color === "" &&
        html.style.fontFamily === "") {
        alert("You are already using the default settings!");
    }
    // if something is changed, reset themes
    else {
        theme.selectedIndex = "0"; // reset theme selection
        updateTheme("", ""); // reset theme
        font.selectedIndex = "0"; // reset font selection
        updateFont(""); // reset font
        alert("Resetted the theme and font settings!");
    }
    
}

theme.onchange = function() {
    let choice = theme.value;
    
    switch (choice) {
        case "black":
            updateTheme("black", "white");
            break;
        case "blue":
            updateTheme("#1565c0", "white");
            break;
        case "orange":
            updateTheme("#ef6c00", "black");
            break;
        default:
            updateTheme("", "");
    }
}

font.onchange = function() {
    let choice = font.value;
    
    switch (choice) {
        case "arial":
            updateFont("Arial");
            break;
        case "roboto":
            updateFont("Roboto");
            break;
        default:
            updateFont("Times New Roman");
    }
}