export default {
	meta: {
		id: "norwegian",
		label: "Norwegian",
		cultureKey: 'no',
		flag:`<svg xmlns="http://www.w3.org/2000/svg" id="flag-icons-no" viewBox="0 0 640 480"><path fill="#ed2939" d="M0 0h640v480H0z"/><path fill="#fff" d="M180 0h120v480H180z"/><path fill="#fff" d="M0 180h640v120H0z"/><path fill="#002664" d="M210 0h60v480h-60z"/><path fill="#002664" d="M0 210h640v60H0z"/></svg>`
	},
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
		noChanges: "No problems",
		treatments: {
			label: "Rhytm treatment",
			metoprolol: "Metoprolol",
			amiodarone: "Amiodarone",
			defibrillation: "Defibrillation",
		}
	},
	output: {
		pattern: "The patient had {{organ}} surgery on {{operationDate}}",
		sinusRythm: "Post operative, the patient had an uncomplicated sinus rhythm.",
		chronicalRythm: "The patient had preoperative chronic atrial fibrillation as well as post operative. ",
		paroxysmalRythm: "The patient had preoperative paroxysmal atrial fibrillation as well as post operative.",
		newAFRythm: "The patient had a new onset of atrial fibrillation",
		flutterRythm: "Shit, its fluttering!"
	}
}
