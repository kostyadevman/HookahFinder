import MockAdapter from 'axios-mock-adapter'

import {
  Hookahs,
  Filters
} from './responses'

class Mock {
  constructor (axios) {
    this.mock = new MockAdapter(axios)
  }

  init = () => {
    this.mockHookahs(),
    this.mockFilters(),
    this.mock.onAny().passThrough()
  };

  mockHookahs = () => {
    this.mock.onGet('/api/v1/hookahs.json').reply(200, Hookahs)
  };

  mockFilters = () => {
    this.mock.onGet('/api/v1/filters.json').reply(200, Filters)
  }
}
export default Mock
