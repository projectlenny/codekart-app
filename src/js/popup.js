import { Terminal } from "./terminal";

export class Popup {
    constructor(title, content, okText, cancelText) {
        this.html = `
            <div class="popup__container">
                <div class="popup__title">
                    <h2 class="popup__text">
                        ${title}
                    </h2>
                </div>
                <div class="popup__content">
                    ${content}
                </div>
                <div class="popup__actions">
                    ${(okText != null) ? `<button class="action action--success js-popup-ok">${okText}</button>` : ''}
                    ${(cancelText != null) ? `<button class="action action--danger js-popup-cancel">${cancelText}</button>` : ''}
                </div>
                <button class="popup__close js-popup-close">CLOSE</button>
            </div>
        `;
        this.element = document.createElement('div');
        this.element.className = 'popup';

        this.element.innerHTML = this.html;
    }

    show() {
        document.body.appendChild(this.element);

        document.querySelector('.js-popup-close').addEventListener('click', () => {
            this.closePopup();
        });
    }

    closePopup(e) {
        document.body.removeChild(this.element);
        const event = new Event('popup:close');
        window.dispatchEvent(event);
    }

    onOk(callback) {
        document.querySelector('.js-popup-ok').addEventListener('click', () => {
            callback();
            this.closePopup()
        });
    }

    onCancel(callback) {
        document.querySelector('.js-popup-cancel').addEventListener('click', () => {
            callback();
            this.closePopup()
        });
    }
}