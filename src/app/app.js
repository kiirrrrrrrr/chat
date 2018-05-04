class App {
    constructor(element) {
        this.element = element;

        this.header = this._renderHeader();

        this.chat = new Chat({
            data: { messages: [] }
        });
        this.chat.element.classList.add('app__chat');

        this.form = new Form({
            element: document.createElement('div'),
            onSubmit: message => {
                this.chat.addMessage(message);
            }
        });
        this.form.element.classList.add('app__form');
    }

    render() {

        this.element.append(this.header, this.chat.element, this.form.element);
    }

    _renderHeader() {
        let header = document.createElement('header');
        header.className = 'app__header'
        header.innerHTML = `
            <h1 class="app__headline">kiirrrr_chat &#x1F916<h1>
        `;

        return header;
    }
}