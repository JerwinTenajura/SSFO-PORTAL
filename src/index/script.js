const fileSelector = document.querySelector("input");
const start = document.querySelector("button");
const progress = document.querySelector(".progress");
const textarea = document.querySelector("textarea");

function validateDocument(text) {
	const keywords = ["2nd semester", "2023-2024"];
	for (const keyword of keywords) {
		if (text.toLowerCase().includes(keyword)) {
			return true;
		}
	}
	return false;
}

// Recognition Start
start.onclick = () => {
	textarea.innerHTML = "";
	const rec = new Tesseract.TesseractWorker();
	rec
		.recognize(fileSelector.files[0])
		.progress(function (response) {
			if (response.status == "recognizing text") {
				progress.innerHTML = response.status + "   " + response.progress;
			} else {
				progress.innerHTML = response.status;
			}
		})
		.then(function (data) {
			const extractedText = data.text;
			const isValid = validateDocument(extractedText);
			if (isValid) {
				textarea.innerHTML = extractedText;
				progress.innerHTML = "Document is valid";
			} else {
				textarea.innerHTML = "Invalid document";
				progress.innerHTML = "Document is not valid";
			}
		});
};
