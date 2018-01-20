export class Responder {
    id: string;
    name: string;
    skills: string[];
}

export class Emergency {
    name: string;
    sex: string;
    age: number;
    location: string;
    symptoms: string;

    constructor(_name: string, _sex: string, _age: number, _location: string, _symptoms: string){
        this.name = _name;
        this.sex = _sex;
        this.age = _age;
        this.location = _location;
        this.symptoms = _symptoms;
    }
}
