class Chat extends Component {
    constructor({data = {messages: []}}) {
        super(document.createElement('div'));
        this.element.className = 'chat';
        this._data = data;
        this._messagesCounter = this._data.messages.length;

        super._initEvents('click', this._onClick);
        this.render();
    }

    render() {
        let innerHtml;
        if (this._data.messages.length) {
            innerHtml = `
                <ul class="chat__list">
                </ul>
            `;
        } else {
            innerHtml = `
                <ul class="chat__list">
                    ${this._renderMessages()}
                </ul>
            `
        }

        super.render(innerHtml);
    }

    addMessage(message) {
        this._updateMessagesData(message);

        let li = document.createElement('li');
        li.className = 'chat__item';
        li.innerHTML = this._renderMessage(message);
        li.dataset.index = ++this._messagesCounter;

        this.element.querySelector('.chat__list').append(li);
    }

    removeMessage(message) {
        let index = message.dataset.index;
        this._data.messages.splice(index, 1);
        message.remove();
    }

    _onClick(event) {
        let target = event.target;

        if (target.classList.contains('chat__button--remove')) {
            let item = target.parentNode;
            while (!item.classList.contains('chat__item')) {
                item = item.parentNode;
            } 

            this.removeMessage(item);
        }
    }

    _renderMessages() {
        let messagesHtml = this._data.messages.map(message => {
            return `
                <li class="chat__item">
                    ${this._renderMessage(message)}
                </li>
            `;
        }).join('');
        console.log(messagesHtml);
        return messagesHtml;
    }
    
    _renderMessage({author, text}) {
        author = author || 'Guest';
        text = text || '...';

        let messageHtml =  `
            <div class="chat__message">
                <p class="chat__message-author">${author}</p>
                <time class="chat__message-time">${this._getMessageTime()}</time>
                <div class="chat__message-buttons">
                    ${this._renderMessageButtons()}
                </div>
                <p class="chat__message-text">${text}</p>
            </div>
        `;

        return messageHtml;
    }

    _renderMessageButtons() {
        let removeButton = new Button({
            text: 'Remove'
        });
        removeButton.element.classList.add('chat__button', 'chat__button--remove');

        return removeButton.element.outerHTML;
    }

    _updateMessagesData(message) {
        this._data.messages.push(message);     
    }

    _getMessageTime() {
        let now = new Date();
        let hh = this._formatMessageTime(now.getHours());
        let mm = this._formatMessageTime(now.getMinutes());

        let timeHtml = `
            ${hh} : ${mm}
        `;

        return timeHtml;
    }

    _formatMessageTime(time) {
        return time >= 10 ? time : '0' + time;
    }
}