const ApiGemini = "AQ.Ab8RN6KoUBXxVwQuX90-PilMGZvK36Wqsh-NO2PQX2cPrf5g1g";

function sendMessage() {
    const inputMessage = document.getElementById('message-input');
    const status = document.getElementById('status');
    const btnSubmit = document.getElementById('btn-submit');
    const textMessage = inputMessage.value;

    if (textMessage === "") {
        inputMessage.style.border = '1px solid red';
        return; 
    }

    inputMessage.style.border = 'none';
    status.style.display = 'block';
    status.innerHTML = 'Digitando...';
    status.style.color = '#ffffff';
    btnSubmit.disabled = true;
    inputMessage.disabled = true;

    const dataToPush = {
        contents: [{
            parts: [{text: textMessage}]
        }]
    };

    const url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=" + ApiGemini;

    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dataToPush)
    })

    .then(function(returnApi) {
        if (returnApi.ok == false) throw new Error("Erro na API");

        return returnApi.json();
    })
    .then(function(dataConvert) {
        const textMessageBot = dataConvert.candidates[0].content.parts[0].text;

        status.style.display = 'none';
        inputMessage.value = ''; 
        btnSubmit.disabled = false;
        inputMessage.disabled = false;

        showHistory(textMessage, textMessageBot);
        status.innerHTML = 'Online';
        status.style.color = '#2ee73d';
        status.style.display = 'block';
        inputMessage.style.border = '1px solid #000';

    })

    .catch(function(error) {
        alert("Falha na conexão")
        btnSubmit.disabled = false;
        inputMessage.disabled = false;
        status.innerHTML = 'Online';
        inputMessage.style.border = '1px solid #000';
    });
}

function showHistory(userMessage, botMessage) {
    const history = document.getElementById('history');
    const userTime = getCurrentTime();
    const divUser = document.createElement('div');
    const divBot = document.createElement('div'); 

    divUser.className = 'box-my-message';
    divUser.innerHTML = `
        <div class="my-message""> 
            <p>${userMessage}</p> 
            <p class="message-time"> 
                ${userTime} 
            </p>
        </div>`;

    history.appendChild(divUser);

    divBot.className = 'box-response-message'; 
    let messageConvertMark = marked.parse(botMessage);
    divBot.innerHTML = `
        <div class="response-message">
            <p>
                ${messageConvertMark}
            </p>  
        </div>`;

    history.appendChild(divBot);

    history.scrollTop = history.scrollHeight;
}

function getCurrentTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');

    return hours + ":" + minutes;
}