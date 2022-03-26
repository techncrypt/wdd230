window.onload = function() {


//weather^

    function toggleMenu() {
        document.getElementById('primaryNav').classList.toggle('open');
        document.getElementById('hamburgerBtn').classList.toggle('open');
    }




    let lastModified = document.lastModified;
    
    document.getElementById('lastUpdate').textContent = (`Last modification: ${lastModified}`);
    let currentYear = document.querySelector('#currentYear');

    year = new Date().getFullYear();

    currentYear.textContent = year;

    const now = new Date();
    const currentDate = new Intl.DateTimeFormat("en-UK", {
        dateStyle: "full"
    }).format(now);

    document.getElementById('currentDate').textContent = currentDate;




}