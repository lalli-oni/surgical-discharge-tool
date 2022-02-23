
const tokenPattern = /(?:\{\{)(.+?)(?:\}\})/g;

export function useTextGenerator() {
	const generate = (selections, translation) => {
		let text = translation.output.pattern;
		const tokens = [...text.matchAll(tokenPattern)];
		tokens.forEach(token => {
			let value: string;
			if (selections[token[1]] instanceof Date) {
				let date = selections[token[1]].getDate();
				if (date < 10) date = "0" + date;
				let month = selections[token[1]].getMonth() + 1;
				// Add leading zero
				if (month < 10) month = "0" + month;
				value = `${date}.${month}.${selections[token[1]].getFullYear()}`;
			}
			else {
				value = selections[token[1]];
			}
			text = text.replaceAll(token[0], value);
		});

		let rhythmText = "";
		console.log(selections.rhythms)
		for (const [key, value] of Object.entries(selections.rhythms)) {
			if (value === true && translation.output.rhythms[key]) rhythmText += "\n- " + translation.output.rhythms[key];
		}
		if (rhythmText?.length > 0) text += "\n" + rhythmText;
		
		let rhythmtreatmentText = "";
		for (const [key, value] of Object.entries(selections.rhythms.treatments)) {
			if (value === true && translation.output[key]) rhythmtreatmentText += "\n- " + translation.output[key];
		}
		if (rhythmtreatmentText?.length > 0) text += "\n" + rhythmtreatmentText;

		let respiratoryText = "";
		for (const [key, value] of Object.entries(selections.respitory)) {
			if (value === true && translation.output[key]) respiratoryText += "\n- " + translation.output[key];
		}
		if (respiratoryText?.length > 0) text += "\n" + respiratoryText;

		if (selections?.dischargeLocation?.label) {
			text += "\n\n" + translation.output.dischargePattern.replaceAll(tokenPattern, selections.dischargeLocation.label);
		}

		return text
	};
	return { generate };
}