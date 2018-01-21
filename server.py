from flask import Flask, request, jsonify
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)

em = {}
doctors = {'id':'342d'} # Each doctor is identified by id; paired with curred location

@app.route('/', methods = ['POST'])
def root():
	#do stuff with request.header style variables
	return 'Borders Within Doctors - not haunted'

# @app.route('/test1', methods = ['POST'])
# def test1():
# 	d = request.values.get('Age', None)
# 	if d:
# 		return d
# 	else:
# 		return "No age received"

@app.route('/emergency/start', methods = ['POST'])
def startEmergency():
	print request.data
	store = json.loads(request.data)
	print store
	print store['Lat']
	print store['Lng']
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
