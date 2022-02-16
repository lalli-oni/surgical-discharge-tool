

export function useTextGenerator() {
	const generate = (selections, translation) => {
		console.log(selections);
		let text = translation.output.pattern;
		const tokens = [...text.matchAll(/(?:\{\{)(.+?)(?:\}\})/g)];
		tokens.forEach(token => {
			let value: string;
			if (selections[token[1]] instanceof Date) {
				value = `${selections[token[1]].getDate()}.${selections[token[1]].getMonth() + 1}.${selections[token[1]].getYear()}`;
			}
			else {
				value = selections[token[1]];
			}
			text = text.replaceAll(token[0], value);
		});
		return text
	};
	return { generate };
}