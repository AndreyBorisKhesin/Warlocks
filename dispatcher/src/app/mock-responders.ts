import { Responder } from './responder';

export const SKILLS: string[] = [
    'CPR',
    'First Aid',
    'Med kit'
]

export const RESPONDERS: Responder[] = [
    {name: 'John Doe', skills: ['CPR']},
    {name: 'Jane Smith', skills: ['CPR', 'First Aid']},
    {name: 'Good Samaritan', skills: ['First Aid', 'Med kit']}
]
