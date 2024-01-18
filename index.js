function addImages() {
    const images = [
        { src: "images/perfume1.jpg", alt: "Bleu de chanel" },
        { src: "images/perfume2.jpg", alt: "Rojo Pasion" },
        { src: "images/perfume3.jpg", alt: "Coco Parfume" },
        { src: "images/perfume4.jpg", alt: "Carolina Herrera" },
        { src: "images/perfume5.jpg", alt: "Dior Poison Girl" },
        { src: "images/perfume6.jpg", alt: "L'interdit Givenchy" },
        { src: "images/perfume7.jpg", alt: "Zara" },
    ]

    // <div class="col img-container">
    //         <img src="./images/perfume1.jpg" class="prod-img img-fluid h-75" />
    //         <p class="text-white">Perfume 1</p>
    //</div>

    let container = document.querySelector(".prods");
    images.forEach(image => {
        let article = document.createElement("article");
        article.classList.add("col", "img-container");
        let img = document.createElement("img");
        img.src = image.src;
        img.classList.add("prod-img", "img-fluid", "h-75");
        let div = document.createElement('div')
        div.classList.add('bottom-card')
        let p = document.createElement("p");
        p.classList.add("text-white", "fs-4", "prod-text");
        p.innerText = image.alt;
        div.appendChild(p);
        article.appendChild(img);
        article.appendChild(div);
        container.appendChild(article);
    })

}

function observer() {
    const intersectionCallback = (entries) => {
        for (const entry of entries) { // Loop over all elements that either enter or exit the view.
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('map-section-text')) {
                    entry.target.classList.add('animate__animated', 'animate__bounceInRight');
                }
                // 

                if (entry.target.classList.contains('prod-text')) {
                    entry.target.classList.add('animate__animated', 'animate__fadeInUp');
                }

                if (entry.target.classList.contains('prod-img')) {
                    entry.target.classList.add('animate__animated', 'animate__zoomIn');
                }

                if (entry.target.classList.contains('bottom-card')) {
                    entry.target.classList.add('animate__animated', 'animate__zoomIn');
                }

                entry.target.classList.add('animate__animated', 'animate__bounceInLeft'); // Add a class.
            }
        }
    }

    /**
     * Create a observer and use the instersectionCallback as 
     * the instructions for what to do when an element enters
     * or leaves the view
     */
    const observer = new IntersectionObserver(intersectionCallback);

    const items3 = document.querySelectorAll('.prod-text');
    for (const item of items3) {
        observer.observe(item);
    }
    /**
     * Get all .item elements and loop over them.
     * Observe each individual item.
     */
    const items = document.querySelectorAll('.map-section-title, .prod-img, .bottom-card');
    for (const item of items) {
        observer.observe(item);
    }

    const items2 = document.querySelectorAll('.map-section-text');
    for (const item2 of items2) {
        observer.observe(item2);
    }
}

addImages()
observer()