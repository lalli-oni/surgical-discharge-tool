
const tokenPattern = /(?:\{\{)(.+?)(?:\}\})/g;

export function useTextGenerator() {
	const generate = (selections, translation) => {
		let text = translation.output.pattern;
		const tokens = [...text.matchAll(tokenPattern)];
		tokens.forEach(token => {
			let value: string;
			if (selections[token[1]] instanceof Date) {
				value = `${selections[token[1]].getDate()}.${selections[token[1]].getMonth() + 1}.${selections[token[1]].getFullYear()}`;
			}
			else {
				value = selections[token[1]];
			}
			text = text.replaceAll(token[0], value);
		});

		let rythmText = "";
		for (const [key, value] of Object.entries(selections.rythms)) {
			if (value === true && translation.output[key]) rythmText += "\n- " + translation.output[key];
		}
		if (rythmText?.length > 0) text += "\n" + rythmText;
		
		let rythmtreatmentText = "";
		for (const [key, value] of Object.entries(selections.rythms.treatments)) {
			if (value === true && translation.output[key]) rythmtreatmentText += "\n- " + translation.output[key];
		}
		if (rythmtreatmentText?.length > 0) text += "\n" + rythmtreatmentText;

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