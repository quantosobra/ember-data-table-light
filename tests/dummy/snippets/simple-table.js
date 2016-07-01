import Ember from 'ember';
import CheckboxColumn from 'ember-data-table-light/columns/checkbox';

export default Ember.Component.extend({
  columns: [
    CheckboxColumn,
    {
      label: 'First Name',
      valuePath: 'firstName',
      width: '150px'
    },
    {
      label: 'Last Name',
      valuePath: 'lastName',
      width: '150px'
    },
    {
      label: 'Address',
      valuePath: 'address'
    },
    {
      label: 'State',
      valuePath: 'state'
    },
    {
      label: 'Country',
      valuePath: 'country'
    }
  ]
});
