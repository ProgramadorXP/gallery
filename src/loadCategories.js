import dataCategories from "./data/categories";
const { categorias } = dataCategories;
const divCategories = document.querySelector(".categories");

categorias.forEach((category) => {
  divCategories.innerHTML += `
            <a href="" class="category" data-category="${category.id}">
                <img src="${category.imagenPortada}" alt="" class="category__img" />
                <div class="category__container-info">
                <h3 class="category__name">${category.nombre}</h3>
                <p class="category__num-photos">${category.numeroFotos} Fotos</p>
                </div>
            </a>`;
});
