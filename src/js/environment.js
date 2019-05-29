import {URLParser} from './urlparser';

export class Environment {
    constructor() {
        this.data = new URLParser(window.location).json();

        window.env = {
            mode: (this.data.hostname == 'localhost' || this.data.hostname == "127.0.0.1") ? 'development' : 'production',
            secure: (this.data.protocol == 'https') ? true : false
        }
    }
}