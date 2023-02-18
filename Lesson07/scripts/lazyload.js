const images = document.querySelectorAll("img[data-src]");

function preloadImages(img){
    const src = img.getAttribute("data-src");
    if(!src){
        return;
    }
    img.src = src;
}

const imgOptions = {
    threshold: 0.5,
    rootMargin: "0px 0px 400px 0px"
};

const imgObserver = new IntersectionObserver((inputs, imgObserver) => {
    inputs.forEach(input => {
        if(input.isIntersection){
            return;
        } else {
            preloadImages(input.target);
            imgObserver.unobserve(input.target);
        }
        })
    }, imgOptions);

    images.forEach(image => {
        imgObserver.observe(image)
    });