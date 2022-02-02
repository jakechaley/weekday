import { TestScheduler } from 'jest';
import Date from './../src/weekday.js';

describe('Date', () => {
  test('should return full date', () => {
    const myDate = new Date('02/02/2022');
    expect(myDate.fullDate).toEqual('02/02/2022');

  });
});

// let date = $('#date).val();