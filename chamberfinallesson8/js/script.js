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




    


    let imagesToLoad = document.querySelectorAll("img[data-src]");

    const imageOptions = {
        threshold: 0,
        rootMargin: '0px 0px -500px 0px'
    };
    
    const loadImages = (image) => {
        image.setAttribute("src", image.getAttribute("data-src"));
        image.onload = () => {
            image.removeAttribute("data-src"); 
        };
    
    };
    

    if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver((items, observer) => {
            items.forEach((item) => {
                if (item.isIntersecting) {
                    loadImages(item.target);
                    observer.unobserve(item.target);
                    
                }
            });
        }, imageOptions);
    
        imagesToLoad.forEach((img) => {
            observer.observe(img);
        });
        
    } else {
        imagesToLoad.forEach((img) => {
            loadImages(img);
        });
        
    }

    
}