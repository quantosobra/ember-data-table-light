import DS from 'ember-data';

const {
  Model,
  attr
} = DS;

export default Model.extend({
  firstName: attr('string'),
  lastName: attr('string'),
  company: attr('string'),
  address: attr('string'),
  country: attr('string'),
  state: attr('string'),
  email: attr('string'),
  username: attr('string'),
  bio: attr('string')
});
