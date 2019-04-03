'use strict'

const School = use('App/Models/School');

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with schools
 */
class SchoolController {
  /**
   * Show a list of all schools.
   * GET schools
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index () {
    const schools = await School.all()

    return schools
  }

  /**
   * Create/save a new school.
   * POST schools
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response, auth }) {
    const data = request.only(['name'])
    
    try{
      //user_id: auth.user.id
      const school = await School.create({ ...data })

      response.status(201).json(school)
    }catch(e){
      response.status(400).json({message: e.detail})
    }
  }

  /**
   * Display a single school.
   * GET schools/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params }) {
    const school = await School.findOrFail(params.id)

    return school
  }

  /**
   * Update school details.
   * PUT or PATCH schools/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const data = request.only(['name'])

    const school = await School.findOrFail(params.id)

    school.merge({ ...data })
    await school.save()

    return school
  }

  /**
   * Delete a school with id.
   * DELETE schools/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, response }) {
    try{
      const school = await School.findOrFail(params.id)

      await school.delete()
    }catch(e){
      response.status(404).json({message: e.detail})
    }
  }

  /**
   * Display a single school.
   * GET schools/:id/classes
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async classes ({ params }) {
    const school = await School.findOrFail(params.id)
    
    return school.clazzes().fetch()
  }
}

module.exports = SchoolController
