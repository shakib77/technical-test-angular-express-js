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
      required: true,
    },
    state_id : {
      type: 'number',
      columnType: 'integer',
      required: true,
    },
    state_code: {
      type: 'string',
      columnType: 'varchar',
      required: true,
    },
    country_id: {
      type: 'number',
      columnType: 'integer',
      required: true,
    },
    country_code: {
      type: 'string',
      columnType: 'varchar',
      required: true,
    },
  },
  tableName: 'city',
};
