import { Terminal } from "./terminal";
import { URLParser } from './urlparser';
import { dashboard } from "./pages/dashboard";
import { error } from "./pages/error";
import { connect } from "./pages/connect";
import { Popup } from "./popup";

const routes = {
    '/': dashboard,
    'connect': connect
};

async function Router() {
    const win = document.querySelector('.window');
    const parsed = new URLParser(window.location).json().hashes;

    const route = parsed.page;

    let page = routes[route] || error;

    window.route = route;

    document.querySelector('.banner__title__text').innerHTML = page.title;
    win.innerHTML = await page.render();

    if(parsed.popup != null) {
        const popupModule = routes[parsed.popup];
        const popupContent = await popupModule.render();
        const popup = new Popup(popupModule.title, popupContent, 'OK', 'CANCEL');
        popup.show();
        popupModule.afterRender(popup);
    }
    
    page.afterRender();
}

window.addEventListener('hashchange', Router);

window.addEventListener('load', Router);