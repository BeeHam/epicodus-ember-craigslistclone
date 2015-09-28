import DS from 'ember-data';

export default DS.Model.extend({
  section: DS.attr(),
  location: DS.attr(),
  listings: DS.hasMany('listing', {async: true})
  //remember params.thing_id
});
