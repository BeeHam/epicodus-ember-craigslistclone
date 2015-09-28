import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash({
      category: this.store.findRecord('category', params.category_id),
      // listings: this.store.query('listing', {filter: {category: params.category_id}})
    });
  },

  actions: {
    createListing(category, params) {
      var newListing = this.store.createRecord('listing', params);
      // var testCategory = category;
      category.save();
      newListing.save();
      this.transitionTo('category', category.id);
    }
    // editCategory(category, params) {
    //   debugger;
    //
    //   Object.keys(params).forEach(function(key) {
    //     if (params[key] !== undefined) {
    //       category.set(key, params[key]);
    //     }
    //   });
    //   category.save();
    //   this.transitionTo('category');
  }
});
