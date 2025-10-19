import { describe, it, expect } from 'vitest';
import * as lesson from './Lesson_1-3.js';

describe('Lesson 1-3: Booleans and Conditionals', () => {
  it('should correctly declare a boolean variable "isTrue" with the value true', () => {
    expect(lesson.isTrue).toBe(true);
  });

  it('should correctly declare a boolean constant "isFalse" with the value false', () => {
    expect(lesson.isFalse).toBe(false);
  });

  it('should correctly evaluate that 10 is greater than 5', () => {
    expect(lesson.isGreater).toBe(true);
  });

  it('should correctly perform a strict equality check for "isTrue"', () => {
    expect(lesson.isEqual).toBe(true);
  });

  it('should assign "Greater" to result1 if isGreater is true', () => {
    expect(lesson.result1).toBe("Greater");
  });

  it('should assign "Adult" to result2 if age is 20', () => {
    expect(lesson.age).toBe(20);
    expect(lesson.result2).toBe("Adult");
  });
});
