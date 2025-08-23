import { describe, it, expect } from 'vitest';
import * as lesson from './Lesson_1-2.js';

describe('Lesson 1-2: String Manipulation', () => {
  it('should declare a string variable "firstName"', () => {
    expect(typeof lesson.firstName).toBe('string');
    expect(lesson.firstName.length).toBeGreaterThan(0);
  });

  it('should declare a string constant "lastName"', () => {
    expect(typeof lesson.lastName).toBe('string');
    expect(lesson.lastName.length).toBeGreaterThan(0);
  });

  it('should create a "fullName" by concatenating firstName and lastName with a space', () => {
    expect(lesson.fullName).toBe(`${lesson.firstName} ${lesson.lastName}`);
  });

  it('should create an "introduction" string using a template literal', () => {
    expect(lesson.introduction).toBe(`My name is ${lesson.fullName}.`);
  });

  it('should correctly calculate the length of "fullName"', () => {
    const expectedLength = lesson.firstName.length + 1 + lesson.lastName.length;
    expect(lesson.nameLength).toBe(expectedLength);
  });

  it('should correctly get the first initial from "firstName"', () => {
    expect(lesson.firstInitial).toBe(lesson.firstName[0]);
  });
});
