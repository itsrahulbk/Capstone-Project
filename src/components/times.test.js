import { initializeTimes, updateTimes } from './times';

test('initializeTimes returns the correct initial times', () => {
  const initialTimes = initializeTimes();
  expect(initialTimes).toEqual(['17:00', '18:00', '19:00', '20:00', '21:00']);
});

test('updateTimes returns the same state that is provided', () => {
  const initialState = ['17:00', '18:00', '19:00', '20:00', '21:00'];
  const newState = updateTimes(initialState, { type: 'UPDATE' });
  expect(newState).toEqual(initialState);
});
