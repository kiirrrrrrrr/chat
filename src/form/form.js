class Form {
    constructor({element, onSubmit}) {
        this.element = element;
        this.element.className = 'form';

        this.callback = onSubmit;

        this._initEvents();
    }

    render() {
        this.element.innerHTML = `
            <form class="form__element">
                <label class="form__label" for="author">Name</label>
                <input class="form__author" type="text" name="author" id="author" placeholder="Your name"></input>
                <label class="form__label" for="message">Message</label>
                <textarea class="form__message" name="message" id="message" placeholder="Your message"></textarea>  
                <input class="form__submit" type="submit" value="Send message">
            </form>
        `;
    }

    _initEvents() {
        this.element.addEventListener('submit', this._onSubmit.bind(this));
    }

    _onSubmit(event) {
        event.preventDefault();

        let form = event.target;

        let data = {
            author: form.querySelector('.form__author').value,
            text: form.querySelector('.form__message').value
        }
        this.callback(data);
        
        form.reset();
    }
}