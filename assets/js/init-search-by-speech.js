import ChangeType from "./search-type-by-speech.js";
import DeletDiv from "./delete-div.js";

export default function initSearchBySpeech() {
    const nextButton = document.querySelector('[data-button="next"]');
    const display = document.querySelector('.display');
    const input = document.querySelector('#pokemon-name');
    const recognition = CreateSpeech();
    let listening = false;
    let speechSearch = ''

    function CreateDivRecording() {
        const div = document.createElement('div');
        div.setAttribute('class', 'recording');
        //adicionando o nome do pokemon a div
        div.innerText = 'Gravando.....';
        display.insertBefore(div, nextButton);
    }

    function DeleteDivRecording() {
        const divRecording = document.querySelector('.recording')
        if (divRecording) display.removeChild(divRecording)
    }


    function CreateSpeech() {

        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

        const recognition = SpeechRecognition !== undefined ? new SpeechRecognition() : null;

        if (!recognition) {
            return null
        }

        recognition.lang = 'pt_BR';

        recognition.onstart = () => listening = true;
        recognition.onend = () => listening = false;
        recognition.onerror = e => console.log('Erro:' + e);
        recognition.onresult = e => {
            speechSearch = e.results[0][0].transcript
            if (speechSearch !== ' ')ChangeType(speechSearch)  
        }

        console.log(recognition)

        return recognition

    }

    window.addEventListener('keyup', e => {
        if (!recognition) return;
        if (e.key === ' ' && listening) {
            DeleteDivRecording()
            recognition.stop()
        }

    })
    window.addEventListener('keydown', e => {
        const space = e.key === ' ';
        const wasInTheInput = e.target === input;
        
        if (!recognition) return;
        if (space && !wasInTheInput && (!listening)) {
            DeletDiv();
            CreateDivRecording();
            recognition.start();
        }

    })
}