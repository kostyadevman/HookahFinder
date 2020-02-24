import instance from './instance';

function getBlogItems(filterObject) {
  return instance.get('/api/v1/blog_items.json', { params: filterObject });
}

function getBlogItem(id) {
  return instance.get(`/api/v1/blog_item/${id}.json`);
}

export { getBlogItems, getBlogItem };
