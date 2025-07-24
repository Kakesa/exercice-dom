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

  /*const monButton = document.querySelector(".btn");

  monButton.addEventListener("click", () => {
    
    console.log('tu m\'as cliqué !');
    const title = document.createElement("h1");
    title.textContent = "Hello DOM";

    title.classList.add("red-color");
    body.append(title);

  });*/

// Create four Element

const listeFilms = ["Retour d'un fils", "Avatar", "Titanic", "Star Wars", "Harry Potter"];

const ul = document.createElement("ul");

// Using forEach to create list items
/*listeFilms.forEach(film => {
  const li = document.createElement("li");
  li.textContent = film;
  ul.appendChild(li);
});
body.appendChild(ul);
*/

// Alternative using a for loop
/*for (let i = 0; i < listeFilms.length; i++) {
  const li = document.createElement("li");
  li.textContent = listeFilms[i];
  ul.appendChild(li);
}
body.appendChild(ul);*/

// Formulaire 

const baliseNom = document.getElementById("film");
const nom = baliseNom.value;

console.log(`Le nom du film est : ${nom}`);

const movieShow = document.getElementById("vu");
console.log(`Le film a été vu : ${movieShow.checked}`);
;

const typeMovies = document.querySelectorAll("input[type=radio]");
for (let i = 0; i < typeMovies.length; i++) {
  if (typeMovies[i].checked) {
    console.log(typeMovies[i].checked);
  }
}
