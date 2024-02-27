let tab = [
    "pommes",
    "peches",
    "poire",
    "banane",
    "orange",
    "kiwi",
    "raisin",
    "ananas",
    "cerise",
  ];
  let tab2 = [];
  
  for (let fruits = 0; fruits < tab.length; fruits++) {
    document.getElementById(fruits).addEventListener("click", function () {
      tab2.push(tab[fruits]);
      console.log(tab2);
      afficherListe();
    });
  }
  
  function afficherListe() {
    const table2 = document.getElementById("table2");
    table2.innerHTML = "";
    for (let fruits = 0; fruits < tab2.length; fruits++) {
      const nvllLigne = table2.insertRow(-1);
      const nvllCell = nvllLigne.insertCell(0);
      nvllCell.appendChild(document.createTextNode(tab2[fruits]));
    }
  }