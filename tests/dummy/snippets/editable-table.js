import Ember from 'ember';

export default Ember.Component.extend({
  columns: [
    {
      label: 'First Name',
      valuePath: 'firstName',
      width: '150px',
      cellType: 'editable'
    },
    {
      label: 'Last Name',
      valuePath: 'lastName',
      width: '150px',
      cellType: 'editable'
    },
    {
      label: 'Address',
      valuePath: 'address',
      cellType: 'editable'
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
