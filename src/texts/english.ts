export default {
	meta: {
		id: "english",
		label: "English",
		cultureKey: 'en',
		flag: `<svg xmlns="http://www.w3.org/2000/svg" id="flag-icons-gb" viewBox="0 0 640 480"><path fill="#012169" d="M0 0h640v480H0z"/><path fill="#FFF" d="m75 0 244 181L562 0h78v62L400 241l240 178v61h-80L320 301 81 480H0v-60l239-178L0 64V0h75z"/><path fill="#C8102E" d="m424 281 216 159v40L369 281h55zm-184 20 6 35L54 480H0l240-179zM640 0v3L391 191l2-44L590 0h50zM0 0l239 176h-60L0 42V0z"/><path fill="#FFF" d="M241 0v480h160V0H241zM0 160v160h640V160H0z"/><path fill="#C8102E" d="M0 193v96h640v-96H0zM273 0v480h96V0h-96z"/></svg>`
	},
	title: "Honorable",
	subtitle: "Quickly generate text for your patient discharge reports.",
	organ: "Organ",
	heart: "Heart",
	lungs: "Lung",
	times: {
		label: "Times",
		dayOfOperation: "Day of operation"
	},
	rhythms: {
		label: "Heart rhythm",
		sinus: "Sinus",
		// Atrial Fibrillation (A-fib) is an irregular and often very rapid heart rhythm (arrhythmia) that can lead to blood clots in the heart.
		chronicalAF: "Chronical AF",
		// Paroxysm:  a fit, attack, or sudden increase or recurrence of symptoms (as of a disease)
		paroxysmalAF: "Paroxysmal AF",
		newAF: "New AF",
		flutter: "Flutter",
		treatments: {
			label: "Rhythm treatment",
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
		rhythms: {
			sinus: "Post operative, the patient had an uncomplicated sinus rhythm.",
			chronicalAF: "The patient had preoperative chronic atrial fibrillation as well as post operative. ",
			paroxysmalAF: "The patient had preoperative paroxysmal atrial fibrillation as well as post operative.",
			newAF: "The patient had a new onset of atrial fibrillation",
			flutter: "Shit, its fluttering!",
		},
		dischargePattern: "The patient was discharged to {{location}}",
		metoprolol: "Patient was converted successfully back to sinus rhythm with Metoprolol treatment",
		amiodarone: "Patient was converted successfully back to sinus rhythm with Amiodarone treatment",
		defibrillation: "Pasiented had persistant WRONG rhythm and needed to be debibrillated back to sinus rhythm",
	}
}
