class Chat {
    constructor({element, data = {messages: []}}) {
        this.element = element;
        this.element.className = 'chat';
        this.data = data;
    }

    render() {
        this.element.innerHTML = `
            <ul class="chat__element">
                ${this._renderMessages()}
            </ul>
        `;
    }

    addMessage({author = 'GUEST', text = 'No message'}) {
        this._updateMessages({author, text});

        
    }


    _renderMessages() {
        return this.data.messages.map(message => {
            return `
                <li class="chat__message">
                    ${message.author} : ${message.text}
                </li>`;
        }).join("");
    }

    _updateMessages(message) {
        this.data.messages.push(message);     
    }
}