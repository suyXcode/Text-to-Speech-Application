const textInput = document.getElementById("text-input");
const speakButton = document.getElementById("speak-button");
const wordCountDisplay = document.getElementById("word-count");

// Update word count and limit to 500 words
textInput.addEventListener("input", () => {
  const text = textInput.value.trim();
  const wordCount = text.split(/\s+/).filter(word => word).length;
  wordCountDisplay.textContent = `Words: ${wordCount}/500`;

  if (wordCount > 500) {
    const truncatedText = text.split(/\s+/).slice(0, 500).join(" ");
    textInput.value = truncatedText;
    wordCountDisplay.textContent = "Words: 500/500";
  }
});

// Text-to-Speech function
speakButton.addEventListener("click", () => {
  const text = textInput.value.trim();
  if (text) {
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = "en-US";
    window.speechSynthesis.speak(speech);
  } else {
    alert("Please enter some text.");
  }
});
