import { loadPreviousNext } from "./loadImage";
import slideClick from "./slideClick";
import carousel from "./carousel";

const gallery = document.getElementById('gallery');

gallery.addEventListener('click', (e) => {
    const button = e.target.closest('button');
    
    if(button?.dataset?.btn === 'close') {
        gallery.classList.remove('gallery--active');
        document.body.style.overflow = '';
    }

    if(button?.dataset?.btn === 'next') {
        loadPreviousNext('next');
    }

    if(button?.dataset?.btn === 'previous') {
        loadPreviousNext('previous');
    }
    if(e.target.closest('a')) {
        slideClick(e);
    }

	if (button && button?.dataset.btn === 'next') {
		carousel('next');
	}

	if (button && button?.dataset.btn === 'previous') {
		carousel('previous');
	}
});