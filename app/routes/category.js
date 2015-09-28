import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('category', params.category_id);
  },

  actions: {
    editCategory(category, params) {
      debugger;

      Object.keys(params).forEach(function(key) {
        if (params[key] !== undefined) {
          category.set(key, params[key]);
        }
      });
      category.save();
      this.transitionTo('category');
    }
  }
});
