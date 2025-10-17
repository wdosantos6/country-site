const messages = {
    brasil: {
        text: "Eu te amo, Ana",
        lang: "Português"
    },
    cuba: {
        text: "Te quiero, Ana",
        lang: "Espanhol"
    },
    cazaq: {
        text: "Мен сені сүйемін, Ана (Men seni súıemin, Ana)",
        lang: "Cazaque"
    },
    canada: {
        text: "I love you, Ana",
        lang: "Inglês"
    },
    italia: {
        text: "Ti amo, Ana",
        lang: "Italiano"
    },
    polonia: {
        text: "Kocham cię, Ana",
        lang: "Polonês"
    },
    france: {
        text: "Je t'aime, Ana",
        lang: "Francês"
    },
    dinamarca: {
        text: "Jeg elsker dig, Ana",
        lang: "Dinamarquês"
    },
    grecia: {
        text: "Σε αγαπώ, Άννα (Se agapó, Ánna)",
        lang: "Grego"
    },
    russia: {
        text: "Я люблю тебя, Анна (Ya lyublyu tebya, Anna)",
        lang: "Russo"
    },
    eslove: {
        text: "Ljubim te, Ana",
        lang: "Esloveno"
    },
    arabisaudita: {
        text: "أنا أحبك، آنا (Ana uhibbuki, Ana)",
        lang: "Árabe"
    }
};
const messageText = document.getElementById('message-text');
const languageInfo = document.getElementById('language-info');
const buttons = document.querySelectorAll('.country-button');
buttons.forEach(button => {
    button.addEventListener('click', function() {

        const countryKey = this.getAttribute('data-country');
        const data = messages[countryKey];
        if (data) {
            messageText.textContent = data.text;
            languageInfo.textContent = `Idioma: ${data.lang}. Em breve áudio liberado.`;
            
        } else {
            messageText.textContent = "Mensagem não encontrada para este país.";
            languageInfo.textContent = "Selecione outro país.";
        }
        buttons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
    });
});
messageText.textContent = "Clique em um país para ver a mensagem.";
languageInfo.textContent = "A mensagem será 'Eu te amo, Ana' em diferentes idiomas.";