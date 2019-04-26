import { Terminal } from '../terminal';

export const error = {
    title: 'Error',
    
    render: async () => {
        document.title = "Codekart - Error";
        let html = `
        <h1>Oepsie! Dat is een fout!</h1>
        <h2>Code: 404</h2>
        `;

        return html;
    },
    
    afterRender: async () => {
        Terminal.info('Error loaded!')
    }
}