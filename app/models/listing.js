import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  date: DS.attr(),
  email: DS.attr(),
  details: DS.attr(),
  category: DS.belongsTo('category', {async: true}),
  dateAdded: DS.attr()
});
