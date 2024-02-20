import data from '../data/fotos';
import { loadImage } from './loadImage';

const gallery = document.getElementById('gallery');

const slideClick = (e) => {
    const categoryActive = gallery.dataset.category;

    let id;
    let nombre;
    let ruta;
    let descripcion;

    data.fotos[categoryActive].forEach((photo) => {
        if(photo.id === parseInt(e.target.dataset.idphoto)) {
            id = photo.id;
            nombre = photo.nombre;
            ruta = photo.ruta;
            descripcion = photo.descripcion;
        }
    });
    loadImage(id, nombre, ruta, descripcion);
};

export default slideClick;