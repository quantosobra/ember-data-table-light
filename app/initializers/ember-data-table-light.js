import ENV from '../config/environment';
import Configuration from 'ember-data-table-light/configuration';

export function initialize(/* application */) {
    const config = ENV['ember-data-table-light'] || {};
    Configuration.load(config);
}

export default {
    name: 'ember-data-table-light',
    initialize
};
