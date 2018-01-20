from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/', methods = ['POST'])
def root():
	#do stuff with request.header style variables
	return 'Borders Within Do2'

@app.route('/test', methods = ['POST'])
def test():
	return 'test'
