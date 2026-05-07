/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Lesson, ExerciseType } from './types';

export const MONTHS_LESSON: Lesson = {
  id: 'meses-anio',
  title: 'Տարվա Ամիսները',
  description: 'Սովորիր ամիսների անվանումները իսպաներենով:',
  progress: 0,
  exercises: [
    { id: 'm1', type: ExerciseType.MULTIPLE_CHOICE, question: 'Հունվար', options: ['enero', 'febrero', 'marzo'], answer: 'enero' },
    { id: 'm2', type: ExerciseType.MULTIPLE_CHOICE, question: 'Փետրվար', options: ['marzo', 'febrero', 'abril'], answer: 'febrero' },
    { id: 'm3', type: ExerciseType.MULTIPLE_CHOICE, question: 'Մարտ', options: ['marzo', 'mayo', 'junio'], answer: 'marzo' },
    { id: 'm4', type: ExerciseType.MULTIPLE_CHOICE, question: 'Ապրիլ', options: ['abril', 'agosto', 'septiembre'], answer: 'abril' },
    { id: 'm5', type: ExerciseType.MULTIPLE_CHOICE, question: 'Մայիս', options: ['mayo', 'marzo', 'julio'], answer: 'mayo' },
    { id: 'm6', type: ExerciseType.MULTIPLE_CHOICE, question: 'Հունիս', options: ['junio', 'julio', 'enero'], answer: 'junio' },
    { id: 'm7', type: ExerciseType.MULTIPLE_CHOICE, question: 'Հուլիս', options: ['julio', 'junio', 'agosto'], answer: 'julio' },
    { id: 'm8', type: ExerciseType.MULTIPLE_CHOICE, question: 'Օգոստոս', options: ['agosto', 'septiembre', 'octubre'], answer: 'agosto' },
    { id: 'm9', type: ExerciseType.MULTIPLE_CHOICE, question: 'Սեպտեմբեր', options: ['septiembre', 'octubre', 'noviembre'], answer: 'septiembre' },
    { id: 'm10', type: ExerciseType.MULTIPLE_CHOICE, question: 'Հոկտեմբեր', options: ['octubre', 'noviembre', 'diciembre'], answer: 'octubre' },
    { id: 'm11', type: ExerciseType.MULTIPLE_CHOICE, question: 'Նոյեմբեր', options: ['noviembre', 'diciembre', 'enero'], answer: 'noviembre' },
    { id: 'm12', type: ExerciseType.MULTIPLE_CHOICE, question: 'Դեկտեմբեր', options: ['diciembre', 'noviembre', 'febrero'], answer: 'diciembre' },
  ]
};
