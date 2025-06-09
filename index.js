const body = document.getElementById("root");

// Create Element
const title = document.createElement("h1");
title.textContent = "Hello DOM";
title.classList.add("red-color");

const paragraph = document.createElement("p");
paragraph.textContent = "Lorem jhghjkhklhjkkknkljknknk";
paragraph.addEventListener("click", () => {
  title.classList.remove("red-color");
  title.classList.add("blue-color");
});

const link = document.createElement("a");
link.href = "https://kadea.academy";
link.target = "blank";
link.textContent = "Visitez Kadea";

body.append(title, paragraph, link);
