let select = document.querySelector("select");
let weatherText = document.querySelector("p");

/* Add EventListener to listen for change of selection, 
    then call setWeather() method */
select.addEventListener("change", setWeather);

function setWeather() {
    let choice = select.value; // Get the current weather type

    // Show weather texts according to the choice
    switch (choice)  {
        case "sunny":
            weatherText.textContent = "It's nice and sunny outside! ";
            break;

        case "rainy":
            weatherText.textContent = "It's raining outside. Go out now!";
            break;

        case "snowing":
            weatherText.textContent = "Everywhere is white! It's snowing.";
            break;

        case "overcast":
            weatherText.textContent = "It's not raining, but overcast!";
            break;

        default:
            weatherText.textContent = "";
    }

    /*
    //Instead of switch, if-else can also be used.
     if (choice === "sunny") {
        weatherText.textContent = "It's nice and sunny outside! ";
    }
    else if (choice === "rainy") {
        weatherText.textContent = "It's raining outside. Go out now!";
    }
    else if (choice === "snowing") {
        weatherText.textContent = "Everywhere is white! It's snowing.";
    }
    else if (choice === "overcast") {
        weatherText.textContent = "It's not raining, but overcast!";
    }
    else {
        weatherText.textContent = "";
    }
    */
}