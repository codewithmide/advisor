/*
This code creates a new instance of the SpeechSynthesis interface, gets the available voices and selects the one that matches the 'en-US' language. It also sets up an event listener to reload the voices when they change.
*/
// const synth = window.speechSynthesis;

// const voices = synth.getVoices();
// const voice = voices.find((v) => v.lang === 'en-US');

// synth.onvoiceschanged = () => {
//     const voices = synth.getVoices();
//     const voice = voices.find((v) => v.lang === 'en-US');
// };

function speak(text) {
    const synth = window.speechSynthesis;

    const voices = synth.getVoices();
    const voice = voices.find(v => v.lang === 'en-US' && v.localService);

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = voice;
    synth.speak(utterance);
}

export default speak;