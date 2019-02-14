let usernameIn = document.getElementById("userName");
let passwordIn = document.getElementById("userPass");
let loginButton = document.getElementById("login");
// logoutButton is created here to be able to use .onclick function
// can change
let logoutButton = document.createElement("button");
logoutButton.textContent = "Log Out";
logoutButton.style.marginLeft = "10px";
let html = document.querySelector("html");
let h1 = document.querySelector("h1");
let form = document.getElementById("loginForm");
let failCount = 0; // count of the failed login attempts

function hideElement(element) { 
    // set display of "element" to "none".
    element.style.display = "none";
}

function showElement(element) {
    // make element "visible"
    element.style.display = "block";
}

function showLogoutButton() {
    // creates and adds "log out" button.
    html.appendChild(logoutButton);
}

function printMessage(text, type="h1") {
    // create a text element (default: h1)
    // and print to the page
    let newMessage = document.createElement(type);
    newMessage.textContent = text;
    html.appendChild(newMessage);

}
function alertEmptyField() {
    // check the number of failed attempts
    // and show alert messages.
    if(failCount <= 1) {
        alert("One of the fields is empty!");
        failCount++;
    }
    else if(failCount == 2) {
        alert("This is the last warning!");
        failCount++;
    }
    else {
        // if attempts exceeds 2 times, hide the login form
        hideElement(loginForm);
        printMessage("I'm sorry.", "h1");
    }
}
loginButton.onclick = function() {
    username = usernameIn.value;
    password = passwordIn.value;

    if (username && password) { // if both fields are not empty
        h1.textContent = `Logged in as ${username}.`;
        let greetingMsg = document.createElement("h2");
        greetingMsg.textContent = `Welcome ${username.toUpperCase()}! Nice to see you!`;
        greetingMsg.style.marginLeft = "10px";
        html.appendChild(greetingMsg);
        hideElement(loginForm);
        showLogoutButton();
    }
    else {
        alertEmptyField();
    }
}

logoutButton.onclick = function() {
    let confirmLogout = confirm("Are you sure to logout, " + username + "?");
    console.log("Response of logout: " + confirmLogout);
    if (confirmLogout) {
        username = password = "";
        showElement(loginForm);
        hideElement(logoutButton);
    }
    else {

    }
}