'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PlacesSchema extends Schema {
  up () {
    this.create('places', (table) => {
      table.increments()
      table.string('title')
      table.string('description')
      table.string('link')
      table.integer('user_id')
      table.timestamps()
    })
  }

  down () {
    this.drop('places')
  }
}

module.exports = PlacesSchema
