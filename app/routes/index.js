import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    Ember.RSVP.hash ({
      category: this.store.findAll('category')
      // more stuff later
    });
  },

  actions: {
    createCategory(params) {
      var newCategory = this.store.createRecord('category', params);
      debugger;
      newCategory.save();
      this.transitionTo('index');
    }
  }
});
