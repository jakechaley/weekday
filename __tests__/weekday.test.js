import { TestScheduler } from 'jest';
import Date from './../src/weekday.js';

describe('Date', () => {
  test('should correctly create a date object with 3 properties of month, day, and year', () => {
    const myDate = new Date('June', 5, 1998);
    expect(myDate.month).toEqual('June');
    expect(myDate.day).toEqual(5);
    expect(myDate.year).toEqual(1998);

  });
});