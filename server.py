from flask import Flask, request, jsonify

app = Flask(__name__)

em = {}
doctors = {} # Each doctor is identified by id; paired with curred location

@app.route('/', methods = ['POST'])
def root():
	#do stuff with request.header style variables
	return 'Borders Within Doctors - not haunted'

@app.route('/emergency/start', methods = ['POST'])
def startEmergency():
	em = {}
	em['name'] = request.values.get('Name', None)
	em['sex'] = request.values.get('Sex', None)
	em['age'] = request.values.get('Age', None)
	em['location'] = request.values.get('Location', None)
	em['lat'] = request.values.get('Lat', None)
	em['lng'] = request.values.get('Lng', None)
	em['symptoms'] = request.values.get('symptoms', None)
	if em['lat'] == None or em['lng'] == None:
		return "Need to provide latitude and longitude!"
	else:
		broadcast()
		return "Start emergency successful! lat = " + em['Lat'] + "lng = " + em["Lng"]

def broadcast():
	# Broadcast current emergency to the two closest doctors
	pass

@app.route('/polling', methods = ['POST'])
def poll():
	# Doctor, identified by id, sending in current location
	return "Polling now"
