from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/', methods = ['POST'])
def root():
	#do stuff with request.header style variables
	return 'Borders Within Doctors - not haunted'

@app.route('/emergency/start', methods = ['POST'])
def startEmergency():
	head = request.values.get('Name', None)
	if head == None:
		return "Need to provide header!"
	else:
		return head

@app.route('/polling', methods = ['POST'])
def poll():
	return "Polling now"
