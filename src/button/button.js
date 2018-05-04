class Button extends Component {
    constructor({type = 'button', text='Button'}) {
        super(document.createElement('button'));
        
        this.render(type, text);
    }

    render(type, text) {
        this.element.className = 'button';
        this.element.type = type;
        this.element.textContent = text;
    }
}