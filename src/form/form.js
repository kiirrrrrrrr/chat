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
                <textarea class="form__author" name="author"></textarea>
                <textarea class="form__message" name="message"></textarea>
                <input class="form__submit" type="submit" value="Send message">
            </form>
        `;
    }

    _initEvents() {
        this.element.addEventListener('submit', this._onSubmit.bind(this));
    }

    _onSubmit(event) {
        event.preventDefault();

        let target = event.target;
        let data = {
            author: target.querySelector('.form__author').value,
            text: target.querySelector('.form__message').value
        }

        this.callback();
        target.reset();
    }
}