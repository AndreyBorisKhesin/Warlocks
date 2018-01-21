from flask import Flask, request, jsonify
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)

em = {}
go = False
doctors = {}
doctor0 = {
	'id': '342d',
	'name': 'Mister Doctor',
	'skills': 2,
	'lat': 43.6685586,
	'lng': -79.3979803
}
doctor1 = {
	'id': '168a',
	'name': 'Doctor Doom',
	'skills': 1,
	'lat': 43.6694453,
	'lng': -79.3954161
}
doctors[0] = doctor0
doctors[1] = doctor1
candidate = -1
sent = False
potential_doctors = {}

@app.route('/', methods = ['POST'])
def root():
	return 'Doctors Within Borders'

@app.route('/emergency/start', methods = ['POST'])
def startEmergency():
	global go
	global em
	data = request.data.decode('utf-8')
	store = json.loads(data)
	go = True
	em['em'] = go
	em['name'] = store['Name']
	em['sex'] = store['Sex']
	em['age'] = store['Age']
	em['skills'] = store['Skills']
	em['lat'] = store['Lat']
	em['lng'] = store['Lng']
	em['symptoms'] = store['Symptoms']
	if em['lat'] == None or em['lng'] == None:
		return "Need to provide latitude and longitude!"
	else:
		return jsonify(doctors)

@app.route('/polling', methods = ['POST'])
def poll():
	global em
	global go
	global doctors
	global sent
	global potential_doctors
	data = request.data.decode('utf-8')
	info = json.loads(data)
	for i in range(len(doctors)):
		if doctors[i]['id'] == info['id']:
			doctors[i]['lat'] = info['lat']
			doctors[i]['lng'] = info['lng']
		if (go and not sent and candidate >= 0
			and potential_doctors[candidate]['id'] == info['id']):
			sent = True
			return jsonify({
				'em': True,
				'dist': potential_doctors[candidate]['dist']
			})
		else:
			return jsonify({
				'em': False
			})

@app.route('/closest', methods = ['POST'])
def closest():
	global candidate
	global accepted
	global potential_doctors
	data = request.data.decode('utf-8')
	potential_doctors = json.loads(data)
	accepted = False
	candidate = 0
	return "true"

@app.route('/polling/accept', methods = ['POST'])
def reply():
	global candidate
	global em
	global doctors
	global potential_doctors
	global sent
	global go
	sent = False
	data = request.data.decode('utf-8')
	if not json.loads(data)['go']:
		add = True
		while add:
			candidate = (candidate + 1) % len(doctors)
			for i in range(len(doctors)):
				if (potential_doctors[candidate]['id'] ==
					doctors[i]['id']):
					add = (doctors[i]['skills']
						< em['skills'])
		return jsonify({
			'null': 0
		})
	else:
		go = False
		return jsonify(em)
