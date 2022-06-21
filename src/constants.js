const BASE_URL = 'http://localhost:5000/';
const TASKS_ENDPOINT = 'api/tasks';
const ARITHMETIC_METHOD_QUERY = '?arithmeticMethod=';
const LEVEL_QUERY = '&level=';
const arithmeticMethods = Object.freeze([
  'addition',
  'subtraction',
  'multiplication',
  'division',
]);

export {
  BASE_URL,
  TASKS_ENDPOINT,
  ARITHMETIC_METHOD_QUERY,
  LEVEL_QUERY,
  arithmeticMethods,
};
