export default {
	title: "Honorable",
	subtitle: "Quickly generate text for your patient discharge reports.",
	organ: "Organ",
	heart: "Heart",
	lungs: "Lungs",
	times: {
		label: "Times",
		dayOfOperation: "Day of operation"
	},
	rhytms: {
		label: "Heart rhytms",
		sinus: "Sinus",
		// Atrial Fibrillation (A-fib) is an irregular and often very rapid heart rhythm (arrhythmia) that can lead to blood clots in the heart.
		chronicalAF: "Chronical AF",
		// Paroxysm:  a fit, attack, or sudden increase or recurrence of symptoms (as of a disease)
		paroxysmalAF: "Paroxysmal AF",
		newAF: "New AF",
		flutter: "Flutter"
	},
	respitory: {
		label: "Respitory",
		noChanges: "No problems"
	},
	output: {
		pattern: "The patient had {{organ}} surgery on {{operationDate}}",
		sinus: "Post operative, the patient had an uncomplicated sinus rhythm.",
		chronicalAF: "The patient had preoperative chronic atrial fibrillation as well as post operative. ",
		paroxysmalAF: "The patient had preoperative paroxysmal atrial fibrillation as well as post operative.",
		newAF: "The patient had a new onset of atrial fibrillation",
	}
}
