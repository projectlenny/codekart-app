import { Terminal } from '../terminal';

export const dashboard = {
    title: 'Dashboard',
    
    render: async () => { 
        document.title = "Codekart - Dashboard"
        let html = `
        <h1>Dashboard</h1>
        `;

        return html;
    },
    
    afterRender: async () => {
        Terminal.info('Dashboard loaded!')
    }
}