import escapeRegExp from "escape-string-regexp"

function unescape(string, charactersToUnescape, escapeCharacter = "\\") {
	if (typeof charactersToEscape == "string" && charactersToEscape.length > 1) charactersToEscape = charactersToEscape
	if (
		!Array.isArray(charactersToEscape) ||
		charactersToEscape.some(string => typeof string != "string" || string.length < 1)
	)
		throw new Error("Characters to escape must be an array of non-empty strings")
	if (typeof escapeCharacter != "string" || escapeCharacter.length < 1)
		throw new Error("Must supply a non-empty string escape character")
	if (typeof string != "string") throw new Error("Must Supply a string to escape")
  //s.replace(/\[(.)/g, '$1')
	return string.replace(
		new RegExp("(" + charactersToEscape.map(escapeRegExp).join("|") + ")(.)", "g"),
		"$2"
	)
}

export default unescape
