import { Terminal } from "./terminal";

export class URLParser {
    constructor(url) {
        this.url = url;
    }

    json() {
        let object = {};

        object.hostname = this.url.hostname;
        object.port = this.url.port;
        object.protocol = this.url.protocol;
        object.path = this.url.pathname;

        let hashes = this.url.hash.slice(1).split('&');

        let hashesObject = {};

        hashes.forEach(h => {
            let hash = h.split('=');
            if (hash[0] != "") {
                if(hash[1].substring(0, 1) == "{") {
                    let hashValue = hash[1].replace(new RegExp('%22', 'g'), '"');
                    hashesObject[hash[0]] = JSON.parse(hashValue);
                } else {
                    if(hash[0] == 'page' && hash[1] == '__current__') {
                        hashesObject[hash[0]] = window.route || '/';
                    } else {
                        hashesObject[hash[0]] = hash[1];
                    }
                }
            } else {
                hashesObject.page = '/';
            }
        });

        object.hashes = hashesObject;

        return object;
    }
}