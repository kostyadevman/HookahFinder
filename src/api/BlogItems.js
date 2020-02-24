import instance from './instance';

function getBlogItems(filterObject) {
  return instance.get('/api/v1/blog_items.json', { params: filterObject });
}
export { getBlogItems };
