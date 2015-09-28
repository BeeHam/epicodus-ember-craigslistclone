import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    editCategory(category, params) {
      this.sendAction('editCategory', category, params);
    },

    destroyCategory(category) {
      if(confirm('Whoa! Are you sure?')) {
        this.sendAction('destroyCategory', category);
      }
    }
  }
});
