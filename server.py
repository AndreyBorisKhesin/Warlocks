from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route("/", methods=['POST'])
def handle():
	#do stuff with request.header style variables
	return "Borders Within Doctors"

@app.route("/test1", methods=['GET'])
def handle():
	return "Response for test1!"
