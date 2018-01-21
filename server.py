from flask import Flask, request, jsonify
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)

em = {}
doctors = {} # Each doctor is identified by id; paired with curred location
doctor1 = {
	'id': '342d',
	'name': 'Mister Doctor',
	'skills': ['First aid', 'CPR'],
	'lat': 43.6685586,
	'lng': -79.3979803
}
doctor2 = {
	'id': '168a',
	'name': 'Doctor Doom',
	'skills': ['First aid'],
	'lat': 43.6694453,
	'lng': -79.3954161
}
doctors[1] = doctor1
doctors[2] = doctor2

@app.route('/', methods = ['POST'])
def root():
	#do stuff with request.header style variables
	return 'Borders Within Doctors - not haunted'

@app.route('/emergency/start', methods = ['POST'])
def startEmergency():
	print(request.data)
	data = request.data.decode('utf-8')
	store = json.loads(data)
	print(store)
	print(store['Lat'])
	print(store['Lng'])
	em = {}
	em['name'] = store['Name']
	em['sex'] = store['Sex']
	em['age'] = store['Age']
	#em['location'] = store['Location']
	em['lat'] = store['Lat']
	em['lng'] = store['Lng']
	em['symptoms'] = store['Symptoms']
	if em['lat'] == None or em['lng'] == None:
		return "Need to provide latitude and longitude!"
	else:
		return jsonify(doctors)

def broadcast():
	# Broadcast current emergency to the two closest doctors
	pass

@app.route('/polling', methods = ['POST'])
def poll():
	# Doctor, identified by id, sending in current location
	return "Polling now"
