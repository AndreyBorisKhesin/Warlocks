import { Responder } from './classes';

export const SKILLS: string[] = [
    'CPR',
    'First Aid',
    'Med kit'
]

export const RESPONDERS: Responder[] = [
    {
        id: 'ax01',
        name: 'John Doe',
        skills: ['CPR'],
        lat: 43.6595053,
        lng: -79.3978192
    },
    {
        id: 'bt34',
        name: 'Jane Smith',
        skills: ['CPR', 'First Aid'],
        lat: 43.6695053,
        lng: -79.3878192
    },
    {
        id: 'ffg3',
        name: 'Good Samaritan',
        skills: ['CPR', 'First Aid', 'Med kit'],
        lat: 43.6505053,
        lng: -79.399192
    }
]
