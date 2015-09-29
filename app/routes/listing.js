import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
      return this.store.findRecord('listing', params.listing_id)
  }
// a route for a single listing should only need a single model
});
