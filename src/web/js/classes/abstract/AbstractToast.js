export class AbstractToast {

    constructor(settings) {
        this.settings = settings;
        this.toast_index = 0;
    }

    // TODO logic for multiple underneath each other

    buildHtml() {
        const css = '<style>.toast{' +
            'border: gray 1px solid;\n' +
            'display: inline-block;\n' +
            'min-width: 240px;\n' +
            'padding: 10px;}' +
            '.title{margin-top: 5px;' +
            '    margin-bottom: 5px;}' +
            '.msg{margin-top: 5px;}</style>';
        const html = '<div class="toast" data-toast-id="' + this.toast_index + '"><div class="--inner"><div class="header"><img class="icon" src="' + this.settings.icon + '" alt="toast-icon"><p class="title">' + this.settings.title + '</p></div><p class="msg">' + this.settings.msg + '</p></div></div>';
        return css + html;
    }

    show() {
        let html = this.buildHtml();
        console.log("showing toast")
        document.querySelector('#toast-container').innerHTML += html;
        const timeout_start = setTimeout(() => {
            document.querySelector('#toast-container [data-toast-id="' + this.toast_index + '"]').outerHTML = "";
            this.toast_index++;
            console.log("removed toast")
        }, 1000 * this.settings.time_length_in_seconds);
    }
}