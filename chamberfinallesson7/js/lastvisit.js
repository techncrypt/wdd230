
storage = window.localStorage;

const currentDate = new Date();
const currentMS = currentDate.getTime();


let days = 0;

let lastMS = parseInt(storage.getItem('lastVisit'));
if (lastMS) {
    let diffMS = currentMS - lastMS;
    days = Math.round(diffMS / 86400000);
    console.log(days);
    storage.setItem("lastVisit", currentMS);
}
else {
    storage.setItem("lastVisit", currentMS);
    days = 0
    console.log(days, " You havent visited yet")
}

let daysAgo = document.getElementById("days-last-visit");
daysAgo.innerHTML = `Last visited ${days} day(s) ago`