import Ember from 'ember';

export default Ember.Component.extend({
  formShowing: false,

  actions: {
    showForm() {
      this.set('formShowing', true)
    },
    createCategory() {
      
      var params = {
        category: this.get('category'),
        location: this.get('location')
      }

      this.sendAction('createCategory', params);
      this.set('formShowing', false);

    }
  }
});
