import { Terminal } from "./terminal";
import { dashboard } from "./pages/dashboard";
import { error } from "./pages/error";

const routes = {
    '/': dashboard
};

async function Router() {
    const win = document.querySelector('.window');

    let url = location.hash.slice(1).toLowerCase() || '/';

    const route = url.split("page=")[1] || '/';

    let page = routes[route] || error;

    Terminal.info(route);

    document.querySelector('.banner__title__text').innerHTML = page.title;
    win.innerHTML = await page.render();
    page.afterRender();
}

window.addEventListener('hashchange', Router);

window.addEventListener('load', Router);