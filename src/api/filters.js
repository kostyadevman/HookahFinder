import instance from './instance';

function getHookahFilters() {
  return instance.get('/api/v1/hookah_filters.json');
}

function getBlogFilters() {
  return instance.get('/api/v1/blog_filters.json');
}

export { getHookahFilters, getBlogFilters };
