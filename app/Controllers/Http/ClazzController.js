'use strict'

const Clazz = use('App/Models/Clazz');

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with clazzes
 */
class ClazzController {
  /**
   * Show a list of all clazzes.
   * GET clazzes
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index () {
    const clazzes = await Clazz.query().with('school').fetch()

    return clazzes
  }

  /**
   * Create/save a new clazz.
   * POST clazzes
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request }) {
    const data = request.only(['name', 'school_id'])
    //user_id: auth.user.id
    const clazz = await Clazz.create({ ...data })

    return clazz
  }

  /**
   * Display a single clazz.
   * GET clazzes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params }) {
    const clazz = await Clazz.findOrFail(params.id)

    return clazz
  }

  /**
   * Update clazz details.
   * PUT or PATCH clazzes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request }) {
    const data = request.only(['name, school_id'])

    const clazz = await Clazz.findOrFail(params.id)

    clazz.merge({ ...data })
    await clazz.save()

    return clazz
  }

  /**
   * Delete a clazz with id.
   * DELETE clazzes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, response }) {
    const clazz = await Clazz.findOrFail(params.id)

    await clazz.delete()

    return response.status(200).json({status: true})
  }
}

module.exports = ClazzController
