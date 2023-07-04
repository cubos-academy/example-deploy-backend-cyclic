import { Router } from 'express'
import { HomeController } from './controllers/home'

const routes = Router()

routes.get('/', new HomeController().handle)

export default routes