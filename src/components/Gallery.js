import "./Gallery.css";

const Gallery = () => {
    return(
        <div className="gallery" id="gallery">
            <h1>gallery</h1>
            <div className="galleryCont">
                <figure class="gallery__item gallery__item--1">
                    <img src="./assets/fitnessImage/fitnessImg8.jpg" alt="img1" className="gallery__img" />
                </figure>
                <figure class="gallery__item gallery__item--2">
                    <img src="./assets/fitnessImage/fitnessImg9.jpg" alt="img2" class="gallery__img" />
                </figure>
                <figure class="gallery__item gallery__item--3">
                    <img src="./assets/fitnessImage/fitnessImg4.jpg" alt="img3" class="gallery__img" />
                </figure>
                <figure class="gallery__item gallery__item--4">
                    <img src="./assets/fitnessImage/fitnessImg13.jpg" alt="img4" class="gallery__img" />
                </figure>
                <figure class="gallery__item gallery__item--5">
                    <img src="./assets/fitnessImage/fitnessImg6.jpg" alt="img5" class="gallery__img" />
                </figure>
        </div>
        </div>
    )
}

export default Gallery;