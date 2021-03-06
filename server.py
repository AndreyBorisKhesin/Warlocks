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
doctor2 = {'lat': 43.65094961889173, 'skills': 0, 'lng': -79.39703196325094, 'id': '452o', 'name': 'Doctor Evil'}
doctor3 = {'lat': 43.65516161682753, 'skills': 1, 'lng': -79.3924189847472, 'id': '823a', 'name': 'Doctor Horrible'}
doctor4 = {'lat': 43.66363759158889, 'skills': 2, 'lng': -79.39765493528914, 'id': '487b', 'name': 'Doctor Strange'}
doctor5 = {'lat': 43.66198647634404, 'skills': 0, 'lng': -79.39198662899763, 'id': '158a', 'name': 'Doctor Strangelove'}
doctor6 = {'lat': 43.6607119821097, 'skills': 1, 'lng': -79.39467459413295, 'id': '737u', 'name': 'Darth Vader'}
doctor7 = {'lat': 43.65302783836468, 'skills': 2, 'lng': -79.3946860215969, 'id': '368p', 'name': 'Doctor Nefario'}
doctor8 = {'lat': 43.66695682388216, 'skills': 0, 'lng': -79.3993502608853, 'id': '200o', 'name': 'The Doctor'}
doctor9 = {'lat': 43.65874193268959, 'skills': 2, 'lng': -79.39484999517022, 'id': '240b', 'name': 'Luke Skywalker'}
doctor10 = {'lat': 43.654367255189904, 'skills': 0, 'lng': -79.40155480000719, 'id': '775g', 'name': 'Doctor Jekyll'}
doctor11 = {'lat': 43.652360369226145, 'skills': 1, 'lng': -79.38254437566081, 'id': '426b', 'name': 'Doctor Manhattan'}
doctors[0] = doctor0
doctors[1] = doctor1
doctors[2] = doctor2
doctors[3] = doctor3
doctors[4] = doctor4
doctors[5] = doctor5
doctors[6] = doctor6
doctors[7] = doctor7
doctors[8] = doctor8
doctors[9] = doctor9
doctors[10] = doctor10
doctors[11] = doctor11
candidate = -1
sent = False
accepted = False
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

@app.route('/name', methods = ['POST'])
def name():
	global doctors
	data = request.data.decode('utf-8')
	info = json.loads(data)
	for i in range(len(doctors)):
		if doctors[i]['id'] == info['id']:
			return jsonify({'name': doctors[i]['name']})

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
	global accepted
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
		accepted = True
		go = False
		return jsonify(em)

@app.route('/dispatcherpoll', methods = ['POST'])
def dispatcherPoll():
	global candidate
	global accepted
	global potential_doctors
	if accepted:
		accepted = False
		return jsonify(potential_doctors[candidate])
	else:
		return jsonify({'id': -1})
