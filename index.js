const body = document.getElementById("root");

// Create first Element

/*
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

body.append(title, paragraph, link); */

// Create second Element

/* const button = document.getElementById("btn");

button.addEventListener("click", function (){
  body.style.backgroundColor = "red";
}) */

  // Create three Element

  const monButton = document.querySelector(".btn");

  monButton.addEventListener("click", () => {
    
    console.log('tu m\'as cliqué !');
    const title = document.createElement("h1");
    title.textContent = "Hello DOM";

    title.classList.add("red-color");
    body.append(title);

  });
