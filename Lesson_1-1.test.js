import { describe, it, expect } from 'vitest';
import * as lesson from './Lesson_1-1.js';

describe('Lesson 1-1: Variables and Basic Arithmetic', () => {
  it('should correctly declare variable "a" with the value 10', () => {
    expect(lesson.a).toBe(10);
  });

  it('should correctly declare constant "b" with the value 20', () => {
    expect(lesson.b).toBe(20);
  });

  it('should correctly calculate the sum of a and b', () => {
    expect(lesson.sum).toBe(30);
  });

  it('should correctly calculate the difference between a and b', () => {
    expect(lesson.difference).toBe(-10);
  });

  it('should correctly calculate the product of a and b', () => {
    expect(lesson.product).toBe(200);
  });

  it('should correctly calculate the quotient of a and b', () => {
    expect(lesson.quotient).toBe(0.5);
  });
});
