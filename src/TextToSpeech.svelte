<script lang="ts">
	const synth = window.speechSynthesis;
	let text: string = "";
	let voice: SpeechSynthesisVoice | null = null;

	function populateVoiceList() {
		const voices = synth.getVoices();
		const naturalVoicePtBr = voices.find((voice) => voice.lang === "pt-BR" && voice.name == "Microsoft Francisca Online (Natural) - Portuguese (Brazil)");

		voice = naturalVoicePtBr || voices[0];
	}

	populateVoiceList();

	if (speechSynthesis.onvoiceschanged !== undefined) {
		speechSynthesis.onvoiceschanged = populateVoiceList;
	}

	function speak() {
		const utterance = new SpeechSynthesisUtterance(text);
		utterance.voice = voice;

		synth.speak(utterance);
	}
</script>

<div class="container">
	<h1>Conversão de texto em fala</h1>
	<textarea bind:value={text} placeholder="Digite qualquer coisa"></textarea>

	<button on:click={speak}>Ler em voz alta</button>
</div>

<style>
    .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100vh; /* Full height of the viewport */
        margin: 0;
        padding: 0;
    }

    textarea {
        width: 50%;
        height: 200px; /* Set a specific height */
        padding: 1rem; /* Larger padding */
        font-size: 1.4rem; /* Larger font size */
        border: none; /* Remove border */
        border-radius: 5px; /* Rounded corners */
        background-color: #44475a; /* Darker input field for dark mode */
        color: #f8f8f2; /* Light text color for dark mode */
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15); /* Add a subtle shadow */
        margin-bottom: 1rem; /* Space between the textarea and the button */
        resize: none; /* Prevent user from resizing the textarea */
		font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
    }

	textarea::placeholder {
		color: #bbbbbb; /* Lighter grey color for better contrast in dark mode */
		opacity: 1; /* Firefox needs this to change placeholder color */
	}

    button {
        padding: 0.5rem 1rem;
        font-size: 1.2rem;
        border: none;
        border-radius: 5px;
        background-color: #353ba5; /* Using the same color as the links for consistency */
        color: #ffffff; /* White text color for dark mode */
        cursor: pointer; /* Hand cursor on hover */
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15); /* Add a subtle shadow */
    }

    button:hover {
        background-color: #535bf2; /* Lighter color on hover, same as the links */
    }
</style>