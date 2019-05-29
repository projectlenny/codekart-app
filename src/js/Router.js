import { Terminal } from "./terminal";
import { URLParser } from './urlparser';
import { dashboard } from "./pages/dashboard";
import { error } from "./pages/error";

const routes = {
    '/': dashboard
};

async function Router() {
    const win = document.querySelector('.window');
    const parsed = new URLParser(window.location).json().hashes;

    const route = parsed.page;

    if(parsed.popup != null) {
        Terminal.info('popup detected');
        alert('popup detected');
    }

    let page = routes[route] || error;

    Terminal.info(route); 

    window.route = route;

    document.querySelector('.banner__title__text').innerHTML = page.title;
    win.innerHTML = await page.render();
    page.afterRender();
}

window.addEventListener('hashchange', Router);

window.addEventListener('load', Router);