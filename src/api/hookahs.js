import instance from './instance';

function getHookahs(filterObject) {
  return instance.get('/api/v1/hookahs.json', { params: filterObject });
}
export { getHookahs };
