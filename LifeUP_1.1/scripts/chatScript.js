function sendMessage() {
    const message = document.getElementById('message-input');

    if (!message.value.trim()) {
        message.style.border = '1px solid red';
        return;
    }

    message.style.border = 'none';

    const textoMensagem = message.value;

    const now = new Date();
    const hour = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const hourFormat = `${hour}:${minutes}`;

    showHistory(textoMensagem, hourFormat);

    message.value = '';
}

function showHistory(message, time) {
    const historyBox = document.getElementById('history');
    const boxMyMessage = document.createElement('div');
    const myMessage = document.createElement('p');
    const timeSpan = document.createElement('span');

    boxMyMessage.className = 'box-my-message';
    myMessage.className = 'my-message';
    timeSpan.className = 'message-time';

    myMessage.textContent = message;
    timeSpan.textContent = time;

    myMessage.appendChild(timeSpan);
    boxMyMessage.appendChild(myMessage);
    historyBox.appendChild(boxMyMessage);

    historyBox.scrollTop = historyBox.scrollHeight;
}