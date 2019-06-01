import { Terminal } from '../terminal';

export const connect = {
    title: 'Connect',
    
    render: async () => {
        document.title = "Codekart - Connect";
        let html = `
        <p>Connect with your kart</p>
        `;

        return html;
    },
    
    afterRender: async (popup) => {
        if(popup != null) {
            popup.onOk(() => {
                Terminal.info('Popup ok')
            });
            popup.onCancel(() => {
                null;
            })
            Terminal.info('Popup loaded!');
        }
    }
}