let umumi = document.querySelector(".umumi");
let search = document.querySelector(".search");
let mode = document.querySelector(".mode");
let yazimod = document.querySelector(".yazimode");
let body = document.querySelector("body");
let header = document.querySelector("header");
// let card=document.querySelector(".cardc")
let inputSearch = document.querySelector("#input");
let card = document.querySelector(".card");
let select = document.querySelector("#select");
let option = document.querySelector(".select");

const countriesAPI = "https://restcountries.com/v2/all";

const fetchFlag = async () => {
  let response = await fetch(`${countriesAPI}`);
  let data = await response.json();
  console.log(data);
  let arr = data;
  data.forEach((element) => {
    let card = document.createElement("div");
    card.className = "card";

    let image = document.createElement("img");
    image.className = "img";
    image.src = element.flags.png;
    card.appendChild(image);

    let name = document.createElement("h1");
    name.innerText = element.name;
    card.appendChild(name);

    let population = document.createElement("p");
    population.innerText = `Population:${element.population}`;
    card.appendChild(population);

    let region = document.createElement("p");
    region.className = "region";
    region.innerText = `Region:${element.region}`;
    card.appendChild(region);

    let capital = document.createElement("p");
    capital.className = "capital";
    capital.innerText = `Capital:${element.capital}`;
    card.appendChild(capital);

    umumi.appendChild(card);
  });

  select.addEventListener("change", function () {
    let Filter = arr.filter(
      (a) => a.region.toLocaleLowerCase() == select.value.toLocaleLowerCase()
    );

    //    console.log(select.value);
    //    console.log(Filter);
    umumi.innerHTML = "";
    Filter.forEach((element) => {
      let card = document.createElement("div");
      card.className = "card";

      let image = document.createElement("img");
      image.className = "img";
      image.src = element.flags.png;
      card.appendChild(image);

      let name = document.createElement("h1");
      name.innerText = element.name;
      card.appendChild(name);

      let population = document.createElement("p");
      population.innerText = `Population:${element.population}`;
      card.appendChild(population);

      let region = document.createElement("p");
      region.className = "region";
      region.innerText = `Region:${element.region}`;
      card.appendChild(region);

      let capital = document.createElement("p");
      capital.className = "capital";
      capital.innerText = `Capital:${element.capital}`;
      card.appendChild(capital);

      umumi.appendChild(card);
    });
  });

  input.addEventListener("input", function () {
    let searchData = arr.filter((country) =>
      country.name.toLocaleLowerCase().includes(input.value.toLocaleLowerCase())
    );
    console.log(searchData);
    umumi.innerHTML = "";
    // fetchFlag(searchData);
    // console.log(searchData)
    searchData.forEach((element) => {
      let card = document.createElement("div");
      card.className = "card";

      let image = document.createElement("img");
      image.className = "img";
      image.src = element.flags.png;
      card.appendChild(image);

      let name = document.createElement("h1");
      name.innerText = element.name;
      card.appendChild(name);

      let population = document.createElement("p");
      population.innerText = `Population:${element.population}`;
      card.appendChild(population);

      let region = document.createElement("p");
      region.className = "region";
      region.innerText = `Region:${element.region}`;
      card.appendChild(region);

      let capital = document.createElement("p");
      capital.className = "capital";
      capital.innerText = `Capital:${element.capital}`;
      card.appendChild(capital);

      umumi.appendChild(card);
    });
  });
};

fetchFlag();

yazimod.addEventListener("click", function () {
  // console.log("dasadf");
  umumi.classList.toggle("dark-mode");
  body.classList.toggle("dark-mode");
  header.classList.toggle("headerc");
  search.classList.toggle("searchc");
  input.classList.toggle("inputc");
  // card.classList.toggle("card2");
  option.classList.toggle("selectfilter");
});
