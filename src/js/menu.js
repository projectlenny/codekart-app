export class Menu {
    constructor() {
        this.menuElementLinks = document.querySelectorAll('.header__nav__list__link:not(.header__res__icon)');
        this.menuButtonElement = document.querySelector('.header__res');

        this.menuElementLinks.forEach(link => {
            link.classList.add('header__nav__list__link--hidden');
        });

        const buttonText = this.menuButtonElement.childNodes[0].lastChild;

        this.menuButtonElement.addEventListener('click', (e) => {
            this.toggleMenu(e, this.menuElementLinks, buttonText); 
        });
    }

    toggleMenu(e, linkList, button) {
        e.preventDefault();
        linkList.forEach(link => {
            link.classList.toggle('header__nav__list__link--hidden');
            link.classList.toggle('header__nav__list__link--show');
        });
        
        if(button.innerHTML == "menu") {
            button.innerHTML = "close"
        } else {
            button.innerHTML = "menu"
        }
    }
}