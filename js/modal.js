'use strict';

(() => {
    const refs = {
        openModalBtn: document.querySelector('[data-modal-open]'),
        closeModalBtn: document.querySelector('[data-modal-close]'),
        modal: document.querySelector('[data-modal]'),

    };
    const backdrop = document.querySelector('.backdrop');


    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape") {
            toggleModal();
        }
    });
    backdrop.addEventListener('click', (e) => {

        if (e.target === backdrop) {

            toggleModal();
        }
    });

    function toggleModal() {
        refs.modal.classList.toggle('backdrop--is-hidden');
    }
})();