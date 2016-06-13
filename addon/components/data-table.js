import Ember from 'ember';
import Table from 'ember-light-table';
import EmberDataTableMixin from 'ember-data-table-light/mixins/ember-data-table';
import TablePaginationMixin from 'ember-data-table-light/mixins/table-pagination';
import TableSortingMixin from 'ember-data-table-light/mixins/table-sorting';
import DataTableState from 'ember-data-table-light/services/data-table-state';
import layout from 'ember-data-table-light/templates/components/data-table';
import config from 'ember-data-table-light/configuration';

const { Component, assert, computed, inject, isEmpty } = Ember;

/**
 * @class DataTable
 * @extends Ember.Component
 * @uses EmberDataTableMixin
 * @uses TablePaginationMixin
 * @uses TableSortingMixin
 */
const DataTable = Component.extend(EmberDataTableMixin, TablePaginationMixin, TableSortingMixin, {
  layout,

  /**
   * Configures if the table should have a search field or not. The component
   * that is used to create the search field can be configured with the
   * {{#crossLink "DataTable/searchComponent:attribute"}}{{/crossLink}}
   * attribute.
   *
   * @property search
   * @type Boolean
   * @default true
   * @public
   */
  search: true,

  /**
   * Component that is used to create the search field.
   *
   * @property searchComponent
   * @type String
   * @default 'data-table/search'
   * @public
   */
  searchComponent: 'data-table/search',

  /**
   * Configures if the table should have a dropdown menu to choose the visible
   * columns. The component that is used can be configured with the
   * {{#crossLink "DataTable/columnChooserComponent:attribute"}}{{/crossLink}}
   *
   * @property columnChooser
   * @type Boolean
   * @default true
   * @public
   */
  columnChooser: true,

  /**
   * Component that is used to render a column chooser. The default component
   * requires the [ember-bootstrap](https://github.com/kaliber5/ember-bootstrap)
   * addon.
   *
   * @property columnChooserComponent
   * @type String
   * @default 'data-table/column-chooser'
   * @public
   */
  columnChooserComponent: 'data-table/column-chooser',

  /**
   * Componente para ser exibido quando a tabela estiver vazia.
   *
   * @property emptyComponent
   * @type String
   * @default 'data-table/empty'
   * @public
   */
  emptyComponent: 'data-table/empty',

  /**
   * Component used to indicate that the table is loading.
   *
   * @property loadingComponent
   * @type String
   * @default 'data-table/loading'
   * @public
   */
  loadingComponent: 'data-table/loading',

  /**
   * Indicates if the table has one or more selected rows.
   *
   * @property hasSeletion
   * @type Boolean
   * @public
   */
  hasSelection: computed.notEmpty('table.selectedRows'),

  /**
   * Configures if the table supports bulk actions for the selected records. If
   * you set this to `true`, you must also set a value for
   * {{#crossLink "DataTable/bulkActionsComponent:attribute"}}{{/crossLink}}.
   *
   * @property bulkActions
   * @type Boolean
   * @default false
   * @public
   */
  bulkActions: false,

  /**
   * Component used to render the bulk actions. It's visible only when there
   * are rows selected in the table.
   *
   * @property bulkActionsComponent
   * @type String
   * @default null
   * @public
   */
  bulkActionsComponent: null,

  /**
   * Configures if the table should have a pagination component. The component
   * used to show the pagination can be configured with the
   * {{#crossLink "DataTable/paginationComponent:attribute"}}{{/crossLink}}
   * option.
   *
   * @property pagination
   * @type Boolean
   * @default true
   * @public
   */
  pagination: true,

  /**
   * Component used to render the pagination for the table.
   *
   * @property paginationComponent
   * @type String
   * @default 'data-table/pagination'
   * @public
   */
  paginationComponent: 'data-table/pagination',

  /**
   * Configures if the table state must be saved. Currently, this saves only
   * what columns are visible in the table, but this may be extended to save
   * more properties.
   *
   * @property saveState
   * @type Boolean
   * @default true
   * @public
   */
  saveState: true,

  /**
   * Unique identifier for this table (must be constant across page refreshes),
   * used to load and save the state. If this option is not specified, the
   * model name is used instead.
   *
   * @property identifier
   * @type String
   * @public
   */
  identifier: null,

  /**
   * Configures the service used to save the table state. Currently, the
   * available options are `local-storage` and `simple-auth`, but you can also
   * define yours.
   *
   * @property stateStorage
   * @type String
   * @public
   */
  stateStorage: null,

  /**
   * Instance of the service used to save the table state. This is loaded based
   * on the {{#crossLink "DataTable/stateStorage:attribute"}}{{/crossLink}}
   * option.
   *
   * @property stateService
   * @type DataTableState
   * @protected
   */
  stateService: null,

  /**
   * Table columns.
   *
   * @property columns
   * @type Object[]
   * @public
   */
  columns: [],

  /**
   * Table object for ember-light-table.
   *
   * @property table
   * @type Table
   * @protected
   */
  table: null,

  init() {
    this._super(...arguments);

    assert(
      '[ember-data-table-light] you must pass a model name to be used in this table',
      !isEmpty(this.get('modelName'))
    );

    assert(
      '[ember-data-table-light] you must configure the columns for this table',
      !isEmpty(this.get('columns'))
    );

    this.table = new Table(this.get('columns'));
    this._setupState();
    this._fetchData();
  },

  _setupState() {
    let identifier = this.get('identifier');
    if (!identifier) {
      identifier = this.get('modelName');
      this.set('identifier', identifier);
    }

    if (!this.get('saveState')) {
      return;
    }

    let stateStorage = this.get('stateStorage');
    if (!stateStorage) {
      stateStorage = config.stateStorage;
      this.set('stateStorage', stateStorage);
    }

    let serviceName = 'data-table-state-' + stateStorage;
    this.stateService = inject.service(serviceName);

    assert(
      `[ember-data-table-light] Storage ${stateStorage} is not supported: a service named ${serviceName} was not found`,
      !isEmpty(this.get('stateService'))
    );

    assert(
      `[ember-data-table-light] Storage ${stateStorage} is not supported: the service ${serviceName} must be an instance of DataTableState`,
      this.get('stateService') instanceof DataTableState
    );

    let state = this.get('stateService').load(identifier, this.get('table'));
    this.get('stateService').deserialize(this.get('table'), state);
  },

  actions: {
    reloadTable() {
      this._fetchData();
    },

    makeSearch(searchText) {
      this.set('search', searchText);
      this._fetchData();
    },

    onColumnClick(column) {
      if (!column.sortable) {
        return;
      }

      if (column.sorted) {
        let columnName = column.get('valuePath');
        let direction = column.get('ascending') ? 'asc' : 'desc';

        this.sortColumn(columnName, direction);
      }
      else {
        this.removeSorting();
      }

      this._fetchData();
    },

    columnVisibilityChanged(column) {
      this.sendAction('columnVisibilityChanged', column);

      let state = this.get('stateService').serialize(this.get('table'));
      this.get('stateService').save(this.get('identifier'), state, this.get('table'));
    }
  }
});

DataTable.reopenClass({
  positionalParams: ['modelName']
});

export default DataTable;
