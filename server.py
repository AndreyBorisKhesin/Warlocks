from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

em = {}
doctors = {} # Each doctor is identified by id; paired with curred location

@app.route('/', methods = ['POST'])
def root():
	#do stuff with request.header style variables
	return 'Borders Within Doctors - not haunted'

@app.route('/test1', methods['POST'])
def test1():
	d = request.values.get('Age', None)
	if d:
		return d
	else:
		return "No age received"

@app.route('/emergency/start', methods = ['POST'])
def startEmergency():
	em = {}
	# em['name'] = request.values.get('Name', None)
	# em['sex'] = request.values.get('Sex', None)
	# em['age'] = request.values.get('Age', None)
	# em['location'] = request.values.get('Location', None)
	# em['lat'] = request.values.get('Lat', None)
	# em['lng'] = request.values.get('Lng', None)
	# em['symptoms'] = request.values.get('symptoms', None)
	# if em['lat'] == None or em['lng'] == None:
	# 	return "Need to provide latitude and longitude!"
	# else:
	# 	return jsonify(doctors)
	# head = request.values.get('Name', None)
	# if head == None:
	# 	return "Need to provide a name!"
	# else:
	# 	return head
	d = request.values.get('Age', None)
	if d:
		return d
	else:
		return "No age received"

def broadcast():
	# Broadcast current emergency to the two closest doctors
	pass

@app.route('/polling', methods = ['POST'])
def poll():
	# Doctor, identified by id, sending in current location
	return "Polling now"
