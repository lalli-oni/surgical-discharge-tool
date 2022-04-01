
const tokenPattern = /(?:\{\{)(.+?)(?:\}\})/g;

export function useTextGenerator() {
	const generate = (selections, translation) => {
		let text = translation.output.pattern;
		const tokens = [...text.matchAll(tokenPattern)];
		tokens.forEach(token => {
			let value = selections[token[1]];
			if (value instanceof Date) {
				const date = addLeadingZero(value.getDate());
				const month = addLeadingZero(value.getMonth() + 1);
				value = `${date}.${month}.${value.getFullYear()}`;
			}
			else if (value?.id?.length > 0) {
				value = value.id;
			}
			text = text.replaceAll(token[0], value);
		});

		let rhythmText = "";
		rhythmText += "\n- " + translation.output.rhythms[selections.rhythm.id];
		if (rhythmText?.length > 0) text += "\n" + rhythmText;
		
		let rhythmtreatmentText = "";
		rhythmtreatmentText += "\n- " + translation.output[selections.rhythmTreatment.id];
		if (rhythmtreatmentText?.length > 0) text += "\n" + rhythmtreatmentText;

		let respiratoryText = "";
		respiratoryText += "\n- " + translation.output.respiratory[selections.respiratory.id];
		if (respiratoryText?.length > 0) text += "\n" + respiratoryText;

		if (selections?.dischargeLocation?.label) {
			text += "\n\n" + translation.output.dischargePattern.replaceAll(tokenPattern, selections.dischargeLocation.label);
		}

		return text
	};
	return { generate };
}

const addLeadingZero = (number: number) => (number < 10) ? "0" + new String(number) : new String(number);