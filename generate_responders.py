import random as rnd
#from flask import jsonify

mean = 43.657081, -79.3961597
std = 0.005 
def generate_responders(n):
	responders = {}
	for i in range(n):
		responder = {}
		rid = str(rnd.randint(100, 999)) + chr(rnd.randint(ord('a'),
			 ord('z')))
		#lat = rnd.normalvariate(mean[0], std)
		#lng = rnd.normalvariate(mean[1], std)
		lat = mean[0] + rnd.uniform(-std, std)
		lng = mean[1] + rnd.uniform(-std, std)
		responder['id'] = rid
		responder['lat'] = lat
		responder['lng'] = lng
		responder['skills'] = rnd.randint(0, 2)
		responder['name'] = ''
		#print rid, lat, lng
		#print responder
		responders[i] = responder
	return responders
		

if __name__ == '__main__':
	print str(generate_responders(10))
