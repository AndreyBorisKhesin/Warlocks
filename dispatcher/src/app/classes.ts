export class Responder {
    id: string;
    name: string;
    skills: string[];
    lat: number;
    lng: number;
}

export class Emergency {
    name: string;
    sex: string;
    age: number;
    location: string;
    lat: number;
    lng: number;
    symptoms: string;

    constructor(_name: string, _sex: string, _age: number, _location: string,
      _lat: number, _lng: number, _symptoms: string){
        this.name = _name;
        this.sex = _sex;
        this.age = _age;
        this.location = _location;
        this.lat = _lat;
        this.lng = _lng;
        this.symptoms = _symptoms;
    }
}

export class OneString {
    s: string;
}
