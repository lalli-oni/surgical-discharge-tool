export default {
	meta: {
		id: "icelandic",
		label: "Íslenska",
		cultureKey: 'is',
		flag:`<svg xmlns="http://www.w3.org/2000/svg" id="flag-icons-is" viewBox="0 0 640 480"><defs><clipPath id="is-a"><path fill-opacity=".7" d="M0 0h640v480H0z"/></clipPath></defs><g fill-rule="evenodd" stroke-width="0" clip-path="url(#is-a)"><path fill="#003897" d="M0 0h666.7v480H0z"/><path fill="#fff" d="M0 186.7h186.7V0h106.6v186.7h373.4v106.6H293.3V480H186.7V293.3H0V186.7z"/><path fill="#d72828" d="M0 213.3h213.3V0h53.4v213.3h400v53.4h-400V480h-53.4V266.7H0v-53.4z"/></g></svg>`
	},
	title: "Honorable",
	subtitle: "Spýtir út texta fyrir útskrift (á sjúklingum, ekki menntaskólapakk!).",
	organ: "Líffæri",
	heart: "Hjarta",
	lungs: "Lungu",
	times: {
		label: "Tímar",
		dayOfOperation: "Dagur uppskurðar"
	},
	rhythms: {
		label: "Heart rhythms",
		sinus: "Sinus",
		// Atrial Fibrillation (A-fib) is an irregular and often very rapid heart rhythm (arrhythmia) that can lead to blood clots in the heart.
		chronicalAF: "Chronical AF",
		// Paroxysm:  a fit, attack, or sudden increase or recurrence of symptoms (as of a disease)
		paroxysmalAF: "Paroxysmal AF",
		newAF: "New AF",
		flutter: "Flutter",
		treatments: {
			label: "rhythm treatment",
			metoprolol: "Metoprolol",
			amiodarone: "Amiodarone",
			defibrillation: "Defibrillation",
		}
	},
	respitory: {
		label: "Respiratory",
		noChanges: "No problems"
	},
	dischargeLocations: {
		label: "Discharge locations",
		items: [{
			id: "home",
			label: "Home",
		},{
			id: "haugesund",
			label: "Haugesund",
		},{
			id: "haraldsplass",
			label: "Haraldsplass",
		},{
			id: "stavanger",
			label: "Stavanger",
		}]
	},
	output: {
		pattern: "The patient had {{organ}} surgery on {{operationDate}}",
		sinusRhythm: "Post operative, the patient had an uncomplicated sinus rhythm.",
		chronicalRhythm: "The patient had preoperative chronic atrial fibrillation as well as post operative. ",
		paroxysmalRhythm: "The patient had preoperative paroxysmal atrial fibrillation as well as post operative.",
		newAFRhythm: "The patient had a new onset of atrial fibrillation",
		flutterRhythm: "Shit, its fluttering!",
		dischargePattern: "The patient was discharged to {{location}}",
		metoprolol: "Patient was converted successfully back to sinus rhythm with Metoprolol treatment",
		amiodarone: "Patient was converted successfully back to sinus rhythm with Amiodarone treatment",
		defibrillation: "Pasiented had persistant WRONG rhythm and needed to be debibrillated back to sinus rhythm",
	}
}
