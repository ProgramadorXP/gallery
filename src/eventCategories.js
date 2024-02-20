import dataPhotos from "./data/fotos";
import { loadImage } from './gallery/loadImage';
const containerCategories = document.querySelector(".categories");
const gallery = document.getElementById("gallery");
let categoryActive = "";

containerCategories.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.closest("a")) {
    categoryActive = e.target.closest("a").dataset.category;
    gallery.dataset.category = categoryActive;
    //WE LOAD THE PHOTOS THAT CORRESPOND TO THE CATEGORY
    const photos = dataPhotos.fotos[categoryActive];
    //WE OBTAIN THE CONTAINER THAT CONTAINS ALL PHOTOS OF THE CATEGORY
    const carousel = document.querySelector(".gallery__carousel-sliders");
    //WE EMPTY THE CAROUSEL WHEN THE USER ENTER AGIAN AT CAROUSEL
    carousel.innerHTML = "";
    //WE SHOW THE gallery
    gallery.classList.add("gallery--active");
    //WE REMOVE THE SCROLL AT BODY
    document.body.style.overflow = "hidden";

    const { id, nombre, ruta, descripcion } = photos[0];
    loadImage(id, nombre, ruta, descripcion);


    for (let i = 0; i < photos.length; i++) {
      carousel.innerHTML += `
                <a href="#" class="gallery__carousel-slider">
                    <img src="${photos[i].ruta}" data-idphoto="${photos[i].id}" alt="Imagen ${photos[i].nombre}" class="gallery__carousel-img">
                </a>
            `;
    }
    gallery.querySelector('.gallery__carousel-slider').classList.add('gallery__carousel-slider--active');
  }
});
