export class Responder {
    id: string;
    name: string;
    skills: string[];
    lat: number;
    lng: number;
}

export class Emergency {
    Name: string;
    Sex: string;
    Age: string;
    Lat: number;
    Lng: number;
    Symptoms: string;

    constructor(_name: string, _sex: string, _age: string,
      _lat: number, _lng: number, _symptoms: string){
        this.Name = _name;
        this.Sex = _sex;
        this.Age = _age;
        this.Lat = _lat;
        this.Lng = _lng;
        this.Symptoms = _symptoms;
    }
}

export class OneString {
    s: string;
}

export class Doctor {
    id: string;

    constructor(_id: string) {
      this.id = _id;
    }
}
