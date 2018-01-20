import { Responder } from './classes';

export const SKILLS: string[] = [
    'CPR',
    'First Aid',
    'Med kit'
]

export const RESPONDERS: Responder[] = [
    {id: 'ax01', name: 'John Doe', skills: ['CPR']},
    {id: 'bt34', name: 'Jane Smith', skills: ['CPR', 'First Aid']},
    {id: 'ffg3', name: 'Good Samaritan', skills: ['First Aid', 'Med kit']}
]
