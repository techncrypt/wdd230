const requestURL = "https://techncrypt.github.io/wdd230/chamberfinallesson9/js/data.json";
const cards = document.querySelector(".cards");
const lists = document.querySelector(".listTabs")

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })

    .then(function (jsonData) {

        const dirList = jsonData["directory"];

        const gridView = document.querySelector(".gridBtn");
        const listView = document.querySelector(".listBtn");

        dirList.forEach(displayDir);

        listView.addEventListener("click", function () {
            toggleList()
            dirList.forEach(displayList);
        });

        gridView.addEventListener("click", function () {
            toggleCard()
            dirList.forEach(displayDir);
        });
    });

function displayDir(directory) {

    let card = document.createElement("section");
    card.className = "cardSection";
    let name = document.createElement("h2")
    let logo = document.createElement("img")
    let address = document.createElement("p")
    let website = document.createElement("p")

    name.textContent = directory.companyname;
    address.innerHTML = `<b></b> ${directory.phone}  <br> <b></b> ${directory.address} <br> `
    logo.setAttribute('src', directory.logourl);
    logo.setAttribute('alt', `${directory.companyname} logo`);
    logo.setAttribute('loading', 'lazy')
    website.setAttribute('class','link'); 
    website.innerHTML = "<a href=" + `${directory.website}` + ">" + `${directory.website}`;
    card.appendChild(logo);
    card.appendChild(name);
    card.appendChild(address)
    card.appendChild(website)
    cards.appendChild(card);
}

function displayList(directory) {
    let tr = document.createElement("tr");
    let website = document.createElement("p")
    tr.innerHTML = `<td>${directory.companyname} </td> <td>${directory.phone}</td> <td>${directory.address}</td> `
    website.setAttribute('class','link'); 
    website.innerHTML = "<a href=" + `${directory.website}` + ">" + `${directory.website}`;
    tr.appendChild(website)
    lists.appendChild(tr)
    
}

function toggleCard() {
    document.getElementById("cardToggle").style.display = "grid";
    document.getElementById("listToggle").style.display = "none";
}
function toggleList() {
    document.getElementById("listToggle").style.display = "block";
    document.getElementById("cardToggle").style.display = "none";
}