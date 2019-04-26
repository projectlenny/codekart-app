const textStyle = 'font-size: 14px; background: transparent; color: black;';

export const Terminal = {
    start: () => {
        const styles = 'font-size: 14px; background: #222; color: #3199ff;';
        console.log("%c[CK TERMINAL]%c Terminal started", styles, textStyle);
        console.log("%c[CK TERMINAL]%c Welcome to Codekart!", styles, textStyle);
    },

    info: (val) => {
        const styles = 'font-size: 14px; background: #222; color: #bada55;';
        console.log("%c[CK INFO]%c " + val, styles, textStyle);
    },

    warning: (val) => {
        const styles = 'font-size: 14px; background: #222; color: #ff8300;';
        console.log("%c[CK WARNING]%c " + val, styles, textStyle);
    },

    error: (val) => {
        const styles = 'font-size: 14px; background: #222; color: #ff2200;';
        console.log("%c[CK ERROR]%c " + val, styles, textStyle);
    }
}