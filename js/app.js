document.addEventListener("DOMContentLoaded", () => {
    console.log("chargé");
    let elTitre;
    /* elTitre = document.querySelector("title")
    mainTitle = document.querySelector("headern h1")
    elTitre.innerText = "Développement PHP" */

    const mainTitle = document.querySelectorAll("title , h1");
    mainTitle.forEach(el => el.innerText = "Développeure PHP");
});

/*variable*/
/*let nom = String("java")
const version = parseFloat(6.5)
console.log(version)

const table = ["html","css",true];
const user = {
    nom: "Diakité",
    prénom: "Awa",
    age: "21",

}
console.table(table)*/