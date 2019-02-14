let select = document.querySelector("select");
let list = document.querySelector("ul");
let h2 = document.querySelector("h2");

createCalendar(31, "January");

select.onchange = function() {
    let choice = select.value;
    let days = 31;
    if(choice === "february") {
        days = 28;
    }
    else if(choice === "april" ||
            choice === "june" ||
            choice === "september"||
            choice === "november") {
        days = 30;
    }
    createCalendar(days, choice);
}

// The createCalendar function is copied from MDN tutorial
function createCalendar(days, choice) {
    list.innerHTML = "";
    h2.textContent = choice.toUpperCase();
    for(let i = 1; i <= days; i++) {
        let listItem = document.createElement("li");
        listItem.textContent = i;
        list.appendChild(listItem);
    }
}

