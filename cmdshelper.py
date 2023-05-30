import json

with open("./cmds.json", "r") as file:
	jsondata = file.read()

r = json.loads(jsondata)

def listcmds():
	for cmd in r:
		print(cmd["alias"])

def main():
	listcmds()
	res = input('specific command data for: ')
	found = False
	for cmd in r:
		if res == cmd["alias"]:
			print('alias: ' + cmd["alias"])
			print('command: ' + cmd["cmd"])
			print('categories:')
			for category in cmd["category"]:
				print("\t" + category)
			print('info:')
			print("\t" + cmd["docs"])
			found = True
	if found == False:
		print("command not found. try again, or use ctrl + c to quit")
		main()

main()
