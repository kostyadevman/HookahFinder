import instance from './instance';

function getBlogArticles() {
  return instance.get('/api/v1/blog_articles.json');
}
export { getBlogArticles };
