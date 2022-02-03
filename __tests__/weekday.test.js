import { TestScheduler } from 'jest';
import dayOfWeek from './../src/weekday.js';

describe('dayOfWeek', () => {
  test('should return day of the week in number from 0-6', () => {
    const newDay = new Date('02/02/2022');
    const result = dayOfWeek(newDay);
    expect(result).toEqual(3);
    
  });
});

// let date = $('#date).val();