import instance from './instance'

function getFilters () {
  return instance.get('/api/v1/filters.json')
}
export { getFilters }
