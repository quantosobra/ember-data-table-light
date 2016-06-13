import Ember from 'ember';

const {
  Controller
} = Ember;

export default Controller.extend({
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
