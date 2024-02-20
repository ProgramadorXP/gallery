import data from '../data/fotos';
const loadImage = (id, nombre, ruta, descripcion) => {
    document.querySelector('.gallery__title').innerText = nombre;
    document.querySelector('.gallery__img-active').src = ruta;
    document.querySelector('.gallery__img-active').dataset.idImage = id;
    document.querySelector('.gallery__description-img-active').innerText = descripcion;

    gallery.querySelectorAll('.gallery__carousel-slider--active').forEach((element) => {
		element.classList.remove('gallery__carousel-slider--active');
	});

    const categoryActual = gallery.dataset.category;
	const photos = data.fotos[categoryActual];

	let indexImageActual;
	
	photos.forEach((photo, index) => {
		if (photo.id === id) {
			indexImageActual = index;
		}
	});

    if(document.querySelectorAll('.gallery__carousel-slider').length > 0) {
        gallery.querySelectorAll('.gallery__carousel-slider')[indexImageActual].classList.add('gallery__carousel-slider--active');
    }
};

const loadPreviousNext = (address) => {
	const categoryActual = gallery.dataset.category;
	const photos = data.fotos[categoryActual];

	
	const idImageActual = parseInt(gallery.querySelector('.gallery__img-active').dataset.idImage);

	let indexImageActual;
	
	photos.forEach((photo, index) => {
		if (photo.id === idImageActual) {
			indexImageActual = index;
		}
	});

	if (address === 'next') {
		
		if (photos[indexImageActual + 1]) {
			const { id, nombre, ruta, descripcion } = photos[indexImageActual + 1];
			loadImage(id, nombre, ruta, descripcion);
		}
	} else if (address === 'previous') {
		
		if (photos[indexImageActual - 1]) {
			const { id, nombre, ruta, descripcion } = photos[indexImageActual - 1];
			loadImage(id, nombre, ruta, descripcion);
		}
	}
};

export { loadImage, loadPreviousNext };