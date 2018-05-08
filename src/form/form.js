class Form extends Component {
    constructor({onSubmit}) {
        super(document.createElement('form'));
        this.element.className = 'form';

        this.callback = onSubmit;

        super.render(`
            <label class="form__label" for="author">Name</label>
            <input class="form__author" type="text" name="author" id="author" placeholder="Your name" required></input>
            <label class="form__label" for="message">Message</label>
            <textarea class="form__message" name="message" id="message" placeholder="Your message" required></textarea>  
            ${this._renderButton()}
        `);

        this._initEvents('submit', this._onSubmit);
    }

    _renderButton() {
        let button = new Button({
            element: document.createElement('div'),
            type: 'submit',
            text: 'Send message'
        });

        button.element.classList.add('form__submit');

        return button.element.outerHTML;
    }

    _onSubmit(event) {
        event.preventDefault();

        let form = event.target;

        let data = {
            author: form.querySelector('.form__author').value,
            text: form.querySelector('.form__message').value
        };
        this.callback(data);
        
        form.reset();
    }
}