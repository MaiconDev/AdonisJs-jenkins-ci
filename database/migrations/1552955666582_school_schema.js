'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SchoolSchema extends Schema {
  up () {
    this.create('schools', (table) => {
      table.increments()
      table.string('name', 240).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('schools')
  }
}

module.exports = SchoolSchema
