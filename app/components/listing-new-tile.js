import Ember from 'ember';

export default Ember.Component.extend({
  formShowing: false,

  actions: {
    showForm() {
      this.set('formShowing', true)
    },
    createListing(category) {
      var params = {
        title: this.get('title'),
        date: this.get('date'),
        email: this.get('email'),
        details: this.get('details'),
        category: category,
        dateAdded: Date.now()
      }

      this.sendAction('createListing', category, params);
      this.set('formShowing', false);

    }
  }
});
