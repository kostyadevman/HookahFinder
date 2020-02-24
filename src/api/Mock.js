import MockAdapter from 'axios-mock-adapter';

import {
  Hookahs,
  BlogItem,
  BlogItems,
  BlogFilters,
  HookahFilters
} from './responses';

class Mock {
  constructor(axios) {
    this.mock = new MockAdapter(axios);
  }

  init = () => {
    this.mockHookahs();
    this.mockBlogItems();
    this.mockBlogFilters();
    this.mockHookahFilters();
    this.mock.onAny().passThrough();
  };

  mockHookahs = () => {
    this.mock.onGet('/api/v1/hookahs.json').reply(200, Hookahs);
  };

  mockBlogItems = () => {
    this.mock.onGet('/api/v1/blog_item/1.json').reply(200, BlogItem);
    this.mock.onGet('/api/v1/blog_items.json').reply(200, BlogItems);
  };

  mockBlogFilters = () => {
    this.mock.onGet('/api/v1/blog_filters.json').reply(200, BlogFilters);
  };

  mockHookahFilters = () => {
    this.mock.onGet('/api/v1/hookah_filters.json').reply(200, HookahFilters);
  }
}
export default Mock;
