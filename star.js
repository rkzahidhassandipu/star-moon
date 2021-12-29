function stars(){
    const count = 800;
    const section = document.querySelector(".star");
    var i = 0;

    while(i < count){
        const starr = document.createElement("i");
        const x = Math.floor(Math.random() * window.innerWidth);
        const y = Math.floor(Math.random() * window.innerHeight);

        const size = Math.random() * 4;
        starr.style.left = x + "px";
        starr.style.top = y + "px";

        starr.style.width = 1 + size + "px";
        starr.style.height = 1 + size + "px";

        const duration = Math.random() * 2;
        starr.style.animationDelay = duration + "s";

        section.appendChild(starr);
        i++

    }
}
stars();

