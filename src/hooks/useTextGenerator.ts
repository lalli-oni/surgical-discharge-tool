export function useTextGenerator() {
	const generate = (selections, translation) => {
		let text = translation.output.pattern;
		const tokens = [...text.matchAll(/(?:\{\{)(.+?)(?:\}\})/g)];
		tokens.forEach(token => {
			console.log(token);
			text = text.replaceAll(token[0], selections[token[1]]);
		});
		return text
	};
	return { generate };
}