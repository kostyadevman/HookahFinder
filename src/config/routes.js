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
  Cells: {
    ...commonURLs('cells')
  },
  Persons: {
    ...commonURLs('persons')
  },
  Trips: {
    ...commonURLs('trips'),
    ShowTraveller: '/trips/:id/travellers/:traveller_id',
    BookingActions: '/trips/booking/:id/*',
    Travellers: '/trips/booking/:id/travellers',
    Routes: '/trips/booking/:id/routes',
    Tickets: '/trips/booking/:id/tickets/:trip_route_id',
    Hotels: '/trips/booking/:id/hotel/:trip_route_id',
    Transfer: '/trips/booking/:id/transfer',
    Summary: '/trips/booking/:id/summary'
  },
  Login: {
    Base: '/login'
  },
  Dashboard: {
    Base: '/dashboard'
  },
  Other: '*',
  Root: '/'
};
