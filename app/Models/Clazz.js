'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Clazz extends Model {
    static get table () {
        return 'classes'
    }
    
    school (){
        return this.belongsTo('App/Models/School')
    }
}

module.exports = Clazz
