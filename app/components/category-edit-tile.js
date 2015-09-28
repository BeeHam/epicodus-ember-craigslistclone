import Ember from 'ember';

export default Ember.Component.extend({
  formShowing: false,

  actions: {
    showForm() {
      this.set('formShowing', true);
    },

    editCategory(category) {
      var params = {
        section: this.get('section') || undefined,
        location: this.get('location') || undefined
      }

      this.sendAction('editCategory', category, params);
      this.set('formShowing', false);
    }
  }

});
