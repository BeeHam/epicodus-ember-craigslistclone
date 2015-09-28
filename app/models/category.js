import DS from 'ember-data';

export default DS.Model.extend({
  section: DS.attr(),
  location: DS.attr()
  //remember params.thing_id
});
