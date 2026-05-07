/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export enum GameMode {
  THEORY = 'theory',
  COMPETE = 'compete'
}

export enum ExerciseType {
  MULTIPLE_CHOICE = 'multiple_choice'
}

export interface Exercise {
  id: string;
  type: ExerciseType;
  question: string;
  options: string[];
  answer: string;
  translation?: string;
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
  exercises: Exercise[];
  progress: number;
}
