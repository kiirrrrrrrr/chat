class App {
    constructor(element) {
        this.element = element;

        this.chat = new Chat({
            element: document.createElement('div'),
            data: {
                messages: [
                    {text: 'Hello', author: 'Ivan'},
                    {text: 'Hello Moto', author: 'Vovua'}
                ]
            }
        });

        this.form = new Form({
            element: document.createElement('div'),
            onSubmit: message => {
                this.chat.addMessage(message);
                this.render();
            }
        });

        this.element.append(this.chat.element, this.form.element);
    }

    render() {
        this.chat.render();
        this.form.render();
    }
}