import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    editCategory(category, params) {
      
      this.sendAction('editCategory', category, params);
    }
  }
});
