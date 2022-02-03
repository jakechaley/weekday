import { TestScheduler } from 'jest';
import dayOfWeek from "./../src/weekday.js";


describe('dayOfWeek', () => {
  test('should return day of the week in number from 0-6', () => {
    const newDay = new Date('02/02/2022');
    const result = dayOfWeek(newDay);
    expect(result).toEqual(3);
  });
  test('should return day of the week corresponding to the index number', () => {
    const newDay = new Date('02/02/2022');
    const weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    expect(weekDay[newDay.getDay()]).toEqual('Wednesday');
  });
});



