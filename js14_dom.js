const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const para = document.createElement("p");
para.style.color = "red";
para.textContent = "Hey I'm red!";

container.appendChild(para);

const h3 = document.createElement("h3");
h3.style.color = "blue";
h3.textContent = "I'am a blue h3!";

container.appendChild(h3);

const container2 = document.createElement("div");
container2.style.border = "1px solid black";
container2.style.background = "pink";

const h1 = document.createElement("h1");
h1.textContent = "I'm in a div";
container2.appendChild(h1);

const para2 = document.createElement("p");
para2.textContent = "ME TOO!";
container2.appendChild(para2);

container.appendChild(container2);
