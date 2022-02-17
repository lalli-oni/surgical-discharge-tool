

export function useTextGenerator() {
	const generate = (selections, translation) => {
		let text = translation.output.pattern;
		const tokens = [...text.matchAll(/(?:\{\{)(.+?)(?:\}\})/g)];
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

		for (const [key, value] of Object.entries(selections.rythms)) {
			if (value === true && translation.output[key]) text += "\n" + translation.output[key];
		}
		
		for (const [key, value] of Object.entries(selections.respitory)) {
			if (value === true && translation.output[key]) text += "\n" + translation.output[key];
		}
		return text
	};
	return { generate };
}