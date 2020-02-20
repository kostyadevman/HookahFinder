import instance from './instance';

function getHookahs() {
  return instance.get('/api/v1/hookahs.json');
}
export { getHookahs };
