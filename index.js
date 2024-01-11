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

addImages()