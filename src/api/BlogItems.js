import instance from './instance';

function getBlogItems() {
  return instance.get('/api/v1/blog_items.json');
}
export { getBlogItems };
