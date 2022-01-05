window.addEventListener('DOMContentLoaded', function () {
    'use strict';

    let tab = document.querySelector(".activity__filters"),
        tabContent = document.querySelector(".filters-result");

    tab.addEventListener('click', (e) => {
        console.log(e.target.classList.item(1));

        let items = tabContent.getElementsByClassName('activity__button--all');
        console.log(items);

        for (let i = 0; i < items.length; i++) {
            if (items[i].classList.contains(e.target.classList.item(1))) {
                items[i].style.display = 'block';
            } else {
                items[i].style.display = 'none';
            }
        }

    });


});