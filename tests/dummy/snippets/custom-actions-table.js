import Ember from 'ember';
import CheckboxColumn from 'ember-data-table-light/columns/checkbox';
import Table from 'ember-light-table';

const {
  Controller
} = Ember;

export default Controller.extend({

  init() {
    this._super(...arguments);
    this.set('table', new Table(this.get('columns')));
  },

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
    },
    {
      cellComponent: 'custom-actions',
      hideable: false
    }
  ],

  actions: {
    deleteUser(row) {
      row.get('content').destroyRecord().then(()=> {
        this.get('table').removeRow(row);
      });
    }
  }
});
