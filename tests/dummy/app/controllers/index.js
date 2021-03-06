import Ember from 'ember';
import CheckboxColumn from 'ember-data-table-light/columns/checkbox';

const {
  Controller
} = Ember;

export default Controller.extend({
  collapseCodeSnippet: true,
  activeTab: 0,

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
  ],

  actions: {
    setActiveTab(tab) {
      this.set('activeTab', tab);
    }
  }
});
