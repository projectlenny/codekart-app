import './../css/main.scss';
import {Environment} from './environment';
import { Menu } from './menu';
import './Router';
import { Terminal } from './terminal';

new Environment();

Terminal.start();

if (!window.env.secure) {
    Terminal.warning("You're not using a secure connection. HTTPS is advised 🔒");
}