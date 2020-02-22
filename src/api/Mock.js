import MockAdapter from 'axios-mock-adapter';

import {
  Hookahs,
  Filters,
  BlogFilters,
  BlogArticles
} from './responses';

class Mock {
  constructor(axios) {
    this.mock = new MockAdapter(axios);
  }

  init = () => {
    this.mockHookahs();
    this.mockFilters();
    this.mockBlogFilters();
    this.mockBlogArticles();
    this.mock.onAny().passThrough();
  };

  mockHookahs = () => {
    this.mock.onGet('/api/v1/hookahs.json').reply(200, Hookahs);
  };

  mockFilters = () => {
    this.mock.onGet('/api/v1/filters.json').reply(200, Filters);
  };

  mockBlogFilters = () => {
    this.mock.onGet('/api/v1/blog_filters.json').reply(200, BlogFilters);
  };

  mockBlogArticles = () => {
    this.mock.onGet('/api/v1/blog_articles.json').reply(200, BlogArticles);
  }
}
export default Mock;
