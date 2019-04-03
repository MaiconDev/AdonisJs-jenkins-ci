'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')
Route.group(() => {
  Route.post('/register', 'AuthController.register')
  Route.post('/authenticate', 'AuthController.authenticate')
}).prefix('auth')


Route.group(() => {
  Route.resource('schools', 'SchoolController').apiOnly()//.except('update')
  Route.get('/schools/:id/classes', 'SchoolController.classes')

  Route.resource('classes', 'ClazzController').apiOnly()
})//.middleware('auth')