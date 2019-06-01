import { Terminal } from '../terminal';
import { Graph } from '../graph';

export const dashboard = {
    title: 'Dashboard',
    
    render: async () => { 
        document.title = "Codekart - Dashboard"
        let html = `
        <div class="card">
            <div class="card__title">
                <h3 class="title__text">Editor</h3>
            </div>
        </div>
        `;

        return html;
    },
    
    afterRender: async () => {
        Terminal.info('Dashboard loaded!');
        const graph = new Graph(null, document.querySelector('.window'));

        graph.draw();
    }
}