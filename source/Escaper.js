import escape from "./escape"

class Escaper {
	constructor(charactersToEscape, escapeCharacter = "\\") {
		if (typeof charactersToEscape == "string" && charactersToEscape.length > 1) charactersToEscape = charactersToEscape
		if (
			!Array.isArray(charactersToEscape) ||
			charactersToEscape.some(string => typeof string != "string" || string.length < 1)
		)
			throw new Error("Characters to escape must be an array of non-empty strings")
		if (typeof escapeCharacter != "string" || escapeCharacter.length < 1)
			throw new Error("Must supply a non-empty string escape character")
		this.escapeCharacter = escapeCharacter
		this.charactersToEscape = character
		this.escape = this.escape.bind(this)
	}
	escape(string) {
		return escape(string, this.charactersToEscape, this.escapeCharacter)
	}
}

export default Escaper
