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
    long: number;
    symptoms: string;

    constructor(_name: string, _sex: string, _age: number, _location: string,
      _lat: number, _long: number, _symptoms: string){
        this.name = _name;
        this.sex = _sex;
        this.age = _age;
        this.location = _location;
        this.lat = _lat;
        this.long = _long;
        this.symptoms = _symptoms;
    }
}
