import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('category');
  },

  actions: {
    editCategory(category, params) {

      Object.keys(params).forEach(function(key) {
        if (params[key] !== undefined) {
          category.set(key, params[key]);
        }
      });
      category.save();
      this.transitionTo('category');
    },

    createCategory(params) {
      var newCategory = this.store.createRecord('category', params);
      newCategory.save();
      this.transitionTo('admin');
    },

    destroyCategory(category) {
      category.destroyRecord();
      this.transitionTo('admin');
    }
  }
});
