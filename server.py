from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/', methods=['POST'])
def root():
	#do stuff with request.header style variables
	return "Borders Within Doctors"

@app.route('/test1', methods=['POST'])
def test1():
	return "Response for test1!"
