let zone2 = document.querySelector("#zone2");
let firstImage = document.querySelector(".first");
let tryChange = document.querySelector('#nameCar');
let secondImage = document.querySelector('#inImg');
let lastImage = document.querySelector('#backImg');
let prix = document.querySelector('#testPrix');


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
     
        firstImage.setAttribute("src", image.chemin);
        secondImage.setAttribute("src", image.secondImg);
        lastImage.setAttribute("src", image.lastImg);
        prix.innerHTML = image.prix;
        tryChange.innerHTML = image.nom;
        changeNameVoiture.innerHTML = image.nom;
    
      }
    });
  };
}


images.forEach(function (image) {
  genererImage(image.chemin, image.type);
});
