import instance from './instance';

function getBlogFilters() {
  return instance.get('/api/v1/blog_filters.json');
}
export { getBlogFilters };
