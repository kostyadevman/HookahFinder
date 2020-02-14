const commonURLs = (url) => {
  return {
    Base: `/${url}`,
    List: `/${url}`,
    Add: `/${url}/add`,
    Edit: `/${url}/:id/edit`,
    Show: `/${url}/:id`
  };
};
export default {
  Login: {
    Base: '/login'
  },
  Other: '*',
  Root: '/',
  CatalogMobx: '/catalog',
  Map: '/map',
  Blog: '/blog',
  About: '/about'
};
