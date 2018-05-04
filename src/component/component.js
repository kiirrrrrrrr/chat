class Component {
    constructor(element) {
        this.element = element;
    }

    render(innerHtml) {
        this.element.innerHTML = innerHtml;
    }

    _initEvents(event, listener) {
        this.element.addEventListener(event, listener.bind(this));
    }
}