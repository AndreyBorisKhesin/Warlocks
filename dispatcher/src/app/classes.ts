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
    age: string;
    lat: number;
    lng: number;
    symptoms: string;

    constructor(_name: string, _sex: string, _age: string,
      _lat: number, _lng: number, _symptoms: string){
        this.name = _name;
        this.sex = _sex;
        this.age = _age;
        this.lat = _lat;
        this.lng = _lng;
        this.symptoms = _symptoms;
    }
}
