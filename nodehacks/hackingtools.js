var readline = require('readline-sync');

function len(arr) {
	return arr.length;
}

const options = [
	{
		"option": "Anonimity",
		"options": [
			{
				"option": "anonsurf",
				"docs": "routes all your traffic through tor",
				"key": "run \"go-anon\" to start & \"de-anon\" to stop"
			},
			{
				"option": "torsocks",
				"docs": "all the commands within the shell run via tor",
				"key": "run \"torsocks-start\" to start & \"torsocks-stop\" to stop"
			},
			{
				"option": "tor-browser",
				"docs": "a browser for accessing the tor network via the tor network and .onion websites",
				"key": "click the god damn button"
			},
			{
				"option": "AliasMan",
				"docs": "a tool used to help you manage your aliases",
				"key": "run \"aliasman\" to launch it"
			}
		]
	},
	{
		"option": "Cryptography",
		"options": [
			{
				"option": "steghide",
				"docs": "a tool used to hide data within images (steganography)",
				"key": "type \"steghide --help\""
			}
		]
	},
	{
		"option": "OSiNT",
		"options": [
			{
				"option": "spiderfoot",
				"docs": "a tool used to automate OSiNT",
				"key": "type \"spiderfoot\" to start it and \"spiderfoot-docs\" to view the docs"
			}
		]
	},
	{
		"option": "Automated Attacks",
		"options": [
			{
				"option": "sqlmap",
				"docs": "a tool used to automate SQL Injections",
				"key": "run \"sqlmap\" to start"
			}
		]
	}
]

for (let i = 0; i < len(options); i++) {
	console.log(i + ": " + options[i].option);
}

const input = readline.question('Enter the id of your choice: ');

for (let i = 0; i < len(options[input].options); i++) {
	console.log(i + ": " + options[input].options[i].option);
}

const input2 = readline.question('Enter the id of your choice: ');

console.log("\n\n\n");

console.log("Tool: " + options[input].options[input2].option + ":");
console.log("Info: " + options[input].options[input2].docs);
console.log("Help: " + options[input].options[input2].key);