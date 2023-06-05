let zone2 = document.querySelector("#zone2");
let firstImage = document.querySelector(".first");
let tryChange = document.querySelector('#nameCar');
let secondImage = document.querySelector('#inImg');
let lastImage = document.querySelector('#backImg');
let container = document.querySelector(".container");
// let changeNameVoiture = document.querySelector("h2");
let marque = document.querySelector('#marque');
let modele = document.querySelector('#modele');
let annee = document.querySelector('#annee');
let prix = document.querySelector('#testPrix');
let nomVoiture = document.querySelector('#nomVoiture');

let images = [
  { chemin: "/asset/images/Mercedes Benz.jpg", nom: "Mercedes-Benz A-Class", marque: "A-Class",prix: "90 000", annee:'2022', secondImg: "/asset/images/merco_in.jpg",lastImg:"/asset/images/merco_out.jpg" },
  { chemin: "/asset/images/rs3.jpg", nom: "RS3", marque: "Audi", prix: "65 000", annee: '2023' , secondImg: "/asset/images/rs3_in.jpg", lastImg:"/asset/images/rs3_out.jpg" },
  { chemin: "/asset/images/rs6.jpg", nom: "RS6", marque: "Audi", prix: '80 000', annee: '2021' , secondImg: "/asset/images/rs6_in.jpg", lastImg:"/asset/images/rs6_out.jpg" },
  { chemin: "/asset/images/urus.jpg", nom: "URUS", marque: "Lamborghini",prix: "125 000", annee: "2023" , secondImg: "/asset/images/urus_in.jpg", lastImg:"/asset/images/urus_out.jpg" },
];



function genererImage(chemin, type) {
  let newImg = document.createElement("img");
  newImg.setAttribute("src", chemin);
  newImg.setAttribute("alt", "image");
  newImg.className = "imgElement " + type;

  zone2.appendChild(newImg);

  newImg.onclick = function (e) {
    let balise = e.target;
    let cheminBalise = balise.getAttribute("src");

    images.forEach(function (image) {
      if (image.chemin == cheminBalise) {
        // Mettre à jour l'image dans la div "first"
        firstImage.setAttribute("src", image.chemin);
        secondImage.setAttribute("src", image.secondImg);
        lastImage.setAttribute("src", image.lastImg);
        prix.innerHTML = image.prix;
        tryChange.innerHTML = image.nom;
        changeNameVoiture.innerHTML = image.nom;
        // container.style.backgroundColor = "red";
        // marque.innerHTML = image.marque;
        // modele.innerHTML = image.nom;
        // annee.innerHTML = image.annee;
        // nomVoiture.innerHTML = image.nom; 
        // Mettre à jour les détails de l'image dans la balise "description"
        // let description = document.querySelector(".description");
        // description.innerHTML = `<h2>Nom</h2>
        //   <p>${image.nom}</p>
        //   <h2>Catégorie</h2>
        //   <p>${image.type}</p>`;

        // if (image === images[0]) {
        //   // container.style.backgroundColor = "blue";
        // }if (image === images[1]) {
        //     // container.style.backgroundColor = "pink";

        //   }
      }
    });
  };
}

// Appel de la fonction genererImage pour chaque image
images.forEach(function (image) {
  genererImage(image.chemin, image.type);
});
