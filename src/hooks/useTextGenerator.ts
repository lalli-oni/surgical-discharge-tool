
const tokenPattern = /(?:\{\{)(.+?)(?:\}\})/g;

export function useTextGenerator() {
	const generate = (selections, translation) => {
		let text = translation.output.pattern;
		const tokens = [...text.matchAll(tokenPattern)];
		tokens.forEach(token => {
			let value: string;
			if (selections[token[1]] instanceof Date) {
				// TODO: Leading zero for months.
				// TODO: Use full year 
				value = `${selections[token[1]].getDate()}.${selections[token[1]].getMonth() + 1}.${selections[token[1]].getFullYear()}`;
			}
			else {
				value = selections[token[1]];
			}
			text = text.replaceAll(token[0], value);
		});

		let rhythmText = "";
		for (const [key, value] of Object.entries(selections.rhythms)) {
			if (value === true && translation.output[key]) rhythmText += "\n- " + translation.output[key];
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