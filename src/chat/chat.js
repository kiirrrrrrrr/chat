class Chat {
    constructor({element, data = {messages: []}}) {
        this.element = element;
        this.element.className = 'chat';
        this.data = data;
    }

    render() {
        this.element.innerHTML = `
            <ul class="chat__list">
                ${this._renderMessages()}
            </ul>
        `;
    }

    addMessage(message) {
        this._updateMessagesData(message);

        let li = document.createElement('li');
        li.innerHTML = this._renderMessage(message)

        this.element.querySelector('.chat__list').append(li);
    }

    
    
    _renderMessages() {
        let messagesHtml = this.data.messages.map(message => {
            return `
                <li class="chat__item">
                    ${this._renderMessage(message)}
                </li>
            `;
        }).join('');
        
        return messagesHtml;
    }
    
    _renderMessage({author, text}) {
        author = author || 'Guest';
        text = text || '...';

        let messageHtml =  `
            <div class="chat__message">
                <p class="chat__message-author">${author}</p>
                <time class="chat__message-time">${this._getMessageTime()}</time>
                <p class="chat__message-text">${text}</p>
            </div>
        `;

        return messageHtml;
    }

    _updateMessagesData(message) {
        this.data.messages.push(message);     
    }

    _getMessageTime() {
        let now = new Date();
        let hh = this._formatTime(now.getHours());
        let mm = this._formatTime(now.getMinutes());

        let timeHtml = `
            ${hh} : ${mm}
        `;

        return timeHtml;
    }

    _formatTime(time) {
        return time >= 10 ? time : '0' + time;
    }
}