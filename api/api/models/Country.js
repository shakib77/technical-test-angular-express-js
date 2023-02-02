/**
 * Country.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    name: {
      type: 'string',
      columnType: 'varchar',
      required: false,
    },
    iso3: {
      type: 'string',
      columnType: 'varchar',
      required: true,
    },
    iso2: {
      type: 'string',
      columnType: 'varchar',
      required: false,
    },
    numeric_code: {
      type: 'number',
      columnType: 'integer',
      required: false,
    },
    /*data_value: {
      type: 'json',
      columnType: 'text',
      required: false,
    },*/
    capital: {
      type: 'string',
      columnType: 'varchar',
      required: false,
    },
    region: {
      type: 'string',
      columnType: 'varchar',
      required: false,
    },
    subregion: {
      type: 'string',
      columnType: 'varchar',
      required: false,
    },
  },
  tableName: 'country',
};
