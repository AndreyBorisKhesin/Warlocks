from flask import Flask, request

app = Flask(__name__)

@app.route("/", methods=['POST'])
def handle():
	#do stuff with request.header style variables
	return "Borders Within Doctors"
