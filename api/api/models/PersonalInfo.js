/**
 * PersonalInfo.js
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
    country: {
      type: 'number',
      columnType: 'integer',
      required: true,
    },
    city: {
      type: 'number',
      columnType: 'integer',
      required: true,
    },
    skills: {
      type: 'json',
      columnType: 'text',
      required: false,
    },
    dob: {
      type: 'ref',
      columnType: 'date',
      required: false,
    },
    resume: {
      type: 'string',
      columnType: 'text',
      required: false,
      allowNull: true,
    },
  },
  tableName: 'personal_info',
};
